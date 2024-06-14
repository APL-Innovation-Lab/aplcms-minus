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

/* themes/contrib/aplpa/templates/layout/html--front.html.twig */
class __TwigTemplate_83980f4ac2f4c502951543a6a66670a7 extends \Twig\Template
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
        echo "
    <!-- Google Tag Manager -->
    <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-M8HW7K');</script>
    <!-- End Google Tag Manager -->
</head>
<body";
        // line 50
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["attributes"] ?? null), 50, $this->source), "html", null, true);
        echo ">
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src=\"https://www.googletagmanager.com/ns.html?id=GTM-M8HW7K\"
    height=\"0\" width=\"0\" style=\"display:none;visibility:hidden\"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->

  ";
        // line 60
        echo "  <a href=\"#main-content\" class=\"usa-sr-only focusable\">
    ";
        // line 61
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar(t("Skip to main content"));
        echo "
  </a>
  ";
        // line 63
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_top"] ?? null), 63, $this->source), "html", null, true);
        echo "
  ";
        // line 64
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page"] ?? null), 64, $this->source), "html", null, true);
        echo "
  ";
        // line 65
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_bottom"] ?? null), 65, $this->source), "html", null, true);
        echo "
  <js-bottom-placeholder token=\"";
        // line 66
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->sandbox->ensureToStringAllowed(($context["placeholder_token"] ?? null), 66, $this->source));
        echo "\">
</body>
</html>
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/layout/html--front.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  114 => 66,  110 => 65,  106 => 64,  102 => 63,  97 => 61,  94 => 60,  85 => 50,  74 => 41,  71 => 40,  66 => 37,  62 => 36,  58 => 35,  54 => 34,  45 => 28,  42 => 27,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/layout/html--front.html.twig", "/var/www/html/themes/contrib/aplpa/templates/layout/html--front.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 40);
        static $filters = array("escape" => 28, "raw" => 34, "safe_join" => 35, "t" => 61);
        static $functions = array("path" => 40);

        try {
            $this->sandbox->checkSecurity(
                ['set'],
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
