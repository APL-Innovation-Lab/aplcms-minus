vcl 4.1;
import std;
import directors;

# Default backend definition.
backend default {
    .host = "web";  
    .port = "80";  
    .connect_timeout = 25s;  
    .first_byte_timeout = 300s;  
    .between_bytes_timeout = 60s; 
}

# Access control list for PURGE requests.
# Here you need to put the IP address of your web server
# Commented out for privacy reasons
acl purge {
    "127.0.0.1";
}

sub vcl_recv {
    # Add an X-Forwarded-For header with the client IP address.
    if (req.restarts == 0) {
        if (req.http.X-Forwarded-For) {
            set req.http.X-Forwarded-For = req.http.X-Forwarded-For + ", " + client.ip;
        }
        else {
            set req.http.X-Forwarded-For = client.ip;
        }
    }

    # Only allow PURGE requests from IP addresses in the 'purge' ACL.
    if (req.method == "PURGE") {
        if (!client.ip ~ purge) {
            return (synth(405, "Not allowed."));
        }
        return (hash);
    }

    # Only allow BAN requests from IP addresses in the 'purge' ACL.
    if (req.method == "BAN") {
        # Same ACL check as above:
        if (!client.ip ~ purge) {
            return (synth(403, "Forbidden"));
        }

        # Logic to allow bans from localhost, to make testing simpler.
        if (client.ip != "127.0.0.1") {
            return (synth(403, "Forbidden"));
        }

        # Add ban marker for later ban lurker checking.
        ban("obj.http.X-Host == " + req.http.host + " && obj.http.X-Url == " + req.url);
        return (synth(200, "Banned"));
    }

    # Other configurations from the old file
    if (std.port(server.ip) == 8025) {
        return (synth(750));
    }
}

sub vcl_synth {
    if (resp.status == 750) {
        set resp.status = 301;
        set resp.http.location = req.http.X-Forwarded-Proto + "://novarnish." + req.http.Host + req.url;
        set resp.reason = "Moved";
        return (deliver);
    }
}

# Additional sections from the new configuration

# Set a header to track cache HITs and MISSes.
sub vcl_deliver {
    # Remove ban-lurker friendly custom headers when delivering to client.
    unset resp.http.X-Url;
    unset resp.http.X-Host;
    # Comment these for easier Drupal cache tag debugging in development.
    # unset resp.http.Cache-Tags;
    # unset resp.http.X-Drupal-Cache-Contexts;

    unset resp.http.X-Drupal-Cache;
    unset resp.http.Expires;

    # set resp.http.Allow = "GET, OPTIONS, PATCH";
    # set resp.http.Access-Control-Allow-Origin = "*";
    # set resp.http.Access-Control-Allow-Methods = "GET, OPTIONS, PATCH";
    # set resp.http.Access-Control-Allow-Headers = "*";

    set resp.http.X-Powered-By = "Text";
    set resp.http.X-Generator = ".Serendipity.";
    set resp.http.Server = "aplcms-minus";

    if (obj.hits > 0) {
        set resp.http.Cache-Tags = "HIT";
    }
    else {
        set resp.http.Cache-Tags = "MISS";
    }
}

# Instruct Varnish what to do in the case of certain backend responses (beresp).
sub vcl_backend_response {
    # Set ban-lurker friendly custom headers.
    set beresp.http.X-Url = bereq.url;
    set beresp.http.X-Host = bereq.http.host;

    # Cache 404s, 301s, at 500s with a short lifetime to protect the backend.
    if (beresp.status == 404 || beresp.status == 301 || beresp.status == 500) {
        set beresp.ttl = 10m;
    }

    # Don't allow static files to set cookies.
    # (?i) denotes case insensitive in PCRE (perl compatible regular expressions).
    # This list of extensions appears twice, once here and again in vcl_recv so
    # make sure you edit both and keep them equal.
    if (bereq.url ~ "(?i)\\.(pdf|asc|dat|txt|doc|xls|ppt|tgz|csv|png|gif|jpeg|jpg|ico|swf|css|js)(\\?.*)?$") {
        unset beresp.http.set-cookie;
    }

    # Allow items to remain in cache up to 6 hours past their cache expiration.
    set beresp.grace = 6h;
}
