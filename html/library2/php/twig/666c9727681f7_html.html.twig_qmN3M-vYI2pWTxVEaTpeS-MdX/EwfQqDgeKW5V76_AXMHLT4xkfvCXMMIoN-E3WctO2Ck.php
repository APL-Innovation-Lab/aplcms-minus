<?php

use Twig\Environment;
use Twig\Error\LoaderError;
use Twig\Error\RuntimeError;
use Twig\Extension\SandboxExtension;
use Twig\Markup;
use Twig\Sandbox\SecurityError;
use Twig\Sandbox\SecurityNotAllowedTagError;
use Twig\Sandbox\SecurityNotAllowedFilterError;
use Twig\Sandbox\SecurityNotAllowedFunctionError;
use Twig\Source;
use Twig\Template;

/* themes/contrib/aplpa/templates/layout/html.html.twig */
class __TwigTemplate_ce2cd2b7b016392c07522199bda23db3 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 1
        echo "
";
        // line 27
        echo "<!DOCTYPE html>
<html";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["html_attributes"] ?? null), 28, $this->source), "html", null, true);
        echo ">
<head>
  <meta name=\"MobileOptimized\" content=\"width\">
  <meta name=\"HandheldFriendly\" content=\"true\">
  <meta name=\"viewport\" content=\"width=device-width, initial-scale=1.0\">
  
  <head-placeholder token=\"";
        // line 34
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 34, $this->source));
        echo "\">
  <title>";
        // line 35
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->safeJoin($this->env, $this->sandbox->ensureToStringAllowed(($context["head_title"] ?? null), 35, $this->source), " | "));
        echo "</title>
  <css-placeholder token=\"";
        // line 36
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 36, $this->source));
        echo "\">
  <js-placeholder token=\"";
        // line 37
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 37, $this->source));
        echo "\">

  ";
        // line 40
        echo "  ";
        $context["current_path"] = $this->extensions['Drupal\Core\Template\TwigExtension']->getPath("<current>");
        // line 41
        $context["exclude_ga"] = (((((((((is_string($__internal_compile_0 = ($context["current_path"] ?? null)) && is_string($__internal_compile_1 = "/slr/calendar/room") && ('' === $__internal_compile_1 || 0 === strpos($__internal_compile_0, $__internal_compile_1))) || (is_string($__internal_compile_2 =         // line 42
($context["current_path"] ?? null)) && is_string($__internal_compile_3 = "/apltv") && ('' === $__internal_compile_3 || 0 === strpos($__internal_compile_2, $__internal_compile_3)))) || (is_string($__internal_compile_4 =         // line 43
($context["current_path"] ?? null)) && is_string($__internal_compile_5 = "/sequence") && ('' === $__internal_compile_5 || 0 === strpos($__internal_compile_4, $__internal_compile_5)))) || (is_string($__internal_compile_6 =         // line 44
($context["current_path"] ?? null)) && is_string($__internal_compile_7 = "/admin") && ('' === $__internal_compile_7 || 0 === strpos($__internal_compile_6, $__internal_compile_7)))) || (is_string($__internal_compile_8 =         // line 45
($context["current_path"] ?? null)) && is_string($__internal_compile_9 = "/node") && ('' === $__internal_compile_9 || 0 === strpos($__internal_compile_8, $__internal_compile_9)))) || (is_string($__internal_compile_10 =         // line 46
($context["current_path"] ?? null)) && is_string($__internal_compile_11 = "/user") && ('' === $__internal_compile_11 || 0 === strpos($__internal_compile_10, $__internal_compile_11)))) || (is_string($__internal_compile_12 =         // line 47
($context["current_path"] ?? null)) && is_string($__internal_compile_13 = "/accs-contact") && ('' === $__internal_compile_13 || 0 === strpos($__internal_compile_12, $__internal_compile_13)))) || (is_string($__internal_compile_14 =         // line 48
($context["current_path"] ?? null)) && is_string($__internal_compile_15 = "/slr/list") && ('' === $__internal_compile_15 || 0 === strpos($__internal_compile_14, $__internal_compile_15)))) || ((is_string($__internal_compile_16 =         // line 49
($context["current_path"] ?? null)) && is_string($__internal_compile_17 = "/apl-tv") && ('' === $__internal_compile_17 || 0 === strpos($__internal_compile_16, $__internal_compile_17))) && (        // line 50
($context["current_path"] ?? null) != "<front>")));
        echo " 

  ";
        // line 53
        echo "  ";
        if ( !($context["exclude_ga"] ?? null)) {
            // line 54
            echo "    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M8HW7K');</script>
    <!-- End Google Tag Manager -->
  ";
        }
        // line 62
        echo "</head>
<body";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 63, $this->source), "html", null, true);
        echo ">
  ";
        // line 65
        echo "  ";
        if ( !($context["exclude_ga"] ?? null)) {
            // line 66
            echo "    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-M8HW7K\"
    height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
  ";
        }
        // line 71
        echo "
  ";
        // line 76
        echo "  <a href=\"#main-content\" class=\"usa-sr-only focusable\">
    ";
        // line 77
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Skip to main content"));
        echo "
  </a>
  ";
        // line 79
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_top"] ?? null), 79, $this->source), "html", null, true);
        echo "
  ";
        // line 80
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page"] ?? null), 80, $this->source), "html", null, true);
        echo "
  ";
        // line 81
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_bottom"] ?? null), 81, $this->source), "html", null, true);
        echo "
  <js-bottom-placeholder token=\"";
        // line 82
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 82, $this->source));
        echo "\">
</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/layout/html.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  141 => 82,  137 => 81,  133 => 80,  129 => 79,  124 => 77,  121 => 76,  118 => 71,  111 => 66,  108 => 65,  104 => 63,  101 => 62,  91 => 54,  88 => 53,  83 => 50,  82 => 49,  81 => 48,  80 => 47,  79 => 46,  78 => 45,  77 => 44,  76 => 43,  75 => 42,  74 => 41,  71 => 40,  66 => 37,  62 => 36,  58 => 35,  54 => 34,  45 => 28,  42 => 27,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/layout/html.html.twig", "/var/www/html/themes/contrib/aplpa/templates/layout/html.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 40, "if" => 53);
        static $filters = array("escape" => 28, "raw" => 34, "safe_join" => 35, "t" => 77);
        static $functions = array("path" => 40);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if'],
                ['escape', 'raw', 'safe_join', 't'],
                ['path']
            );
        } catch (SecurityError $e) {
            $e->setSourceContext($this->source);

            if ($e instanceof SecurityNotAllowedTagError && isset($tags[$e->getTagName()])) {
                $e->setTemplateLine($tags[$e->getTagName()]);
            } elseif ($e instanceof SecurityNotAllowedFilterError && isset($filters[$e->getFilterName()])) {
                $e->setTemplateLine($filters[$e->getFilterName()]);
            } elseif ($e instanceof SecurityNotAllowedFunctionError && isset($functions[$e->getFunctionName()])) {
                $e->setTemplateLine($functions[$e->getFunctionName()]);
            }

            throw $e;
        }

    }
}
