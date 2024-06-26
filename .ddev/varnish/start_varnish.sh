#!/bin/bash
sudo varnishd -f /etc/varnish/default.vcl -a :6081 -T localhost:6082 -S /etc/varnish/secret