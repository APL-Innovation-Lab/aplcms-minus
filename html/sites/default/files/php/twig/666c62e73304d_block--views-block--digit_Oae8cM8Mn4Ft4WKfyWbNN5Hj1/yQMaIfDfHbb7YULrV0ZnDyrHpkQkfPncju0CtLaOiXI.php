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

/* themes/custom/aplpa/templates/block/block--views-block--digital-resources-block-4.html.twig */
class __TwigTemplate_49834da0830fa05db439c234f983f370 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'content' => [$this, 'block_content'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 17
        echo "
";
        // line 19
        $context["classes"] = [0 => "block", 1 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source,         // line 21
($context["configuration"] ?? null), "provider", [], "any", false, false, true, 21), 21, $this->source))), 2 => ("block-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(        // line 22
($context["plugin_id"] ?? null), 22, $this->source))), 3 => ((        // line 23
($context["bundle"] ?? null)) ? (("block--type-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["bundle"] ?? null), 23, $this->source)))) : ("")), 4 => ((        // line 24
($context["view_mode"] ?? null)) ? (("block--view-mode-" . \Drupal\Component\Utility\Html::getClass($this->sandbox->ensureToStringAllowed(($context["view_mode"] ?? null), 24, $this->source)))) : (""))];
        // line 27
        echo "<div";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => ($context["classes"] ?? null)], "method", false, false, true, 27), 27, $this->source), "html", null, true);
        echo ">
  ";
        // line 28
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_prefix"] ?? null), 28, $this->source), "html", null, true);
        echo "
  ";
        // line 29
        if (($context["label"] ?? null)) {
            // line 30
            echo "    <h2";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_attributes"] ?? null), 30, $this->source), "html", null, true);
            echo ">";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["label"] ?? null), 30, $this->source), "html", null, true);
            echo "</h2>
  ";
        }
        // line 32
        echo "  ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["title_suffix"] ?? null), 32, $this->source), "html", null, true);
        echo "
  ";
        // line 33
        $this->displayBlock('content', $context, $blocks);
        // line 36
        echo "
<script type=\"application/ld+json\">
{
  \"@context\": \"https://schema.org\",
  \"@type\": \"BreadcrumbList\",
  \"itemListElement\": [
    {
      \"@type\": \"ListItem\",
      \"position\": 1,
      \"item\": {
        \"@id\": \"https://library.austintexas.gov\",
        \"name\": \"Home\"
      }
    },
    {
      \"@type\": \"ListItem\",
      \"position\": 2,
      \"item\": {
        \"@id\": \"https://library.austintexas.gov/digital/all\",
        \"name\": \"All Digital Resources\"
      }
    },
    {
      \"@type\": \"ListItem\",
      \"position\": 3,
      \"item\": {
        \"@id\": \"https://library.austintexas.gov/digital/subjects\",
        \"name\": \"Subjects\"
      }
    },
    {
      \"@type\": \"ListItem\",
      \"position\": 4,
      \"item\": {
        \"@id\": \"";
        // line 70
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->renderVar($this->extensions['Drupal\Core\Template\TwigExtension']->getUrl("<current>"));
        echo "\", 
        \"name\": \"";
        // line 71
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["page_title"] ?? null), 71, $this->source), "html", null, true);
        echo "\"
      }
    }
  ]
}
</script>


  </script>
</div>
";
    }

    // line 33
    public function block_content($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 34
        echo "    ";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["content"] ?? null), 34, $this->source), "html", null, true);
        echo "
  ";
    }

    public function getTemplateName()
    {
        return "themes/custom/aplpa/templates/block/block--views-block--digital-resources-block-4.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  134 => 34,  130 => 33,  115 => 71,  111 => 70,  75 => 36,  73 => 33,  68 => 32,  60 => 30,  58 => 29,  54 => 28,  49 => 27,  47 => 24,  46 => 23,  45 => 22,  44 => 21,  43 => 19,  40 => 17,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/custom/aplpa/templates/block/block--views-block--digital-resources-block-4.html.twig", "/var/www/html/html/themes/custom/aplpa/templates/block/block--views-block--digital-resources-block-4.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 19, "if" => 29, "block" => 33);
        static $filters = array("clean_class" => 21, "escape" => 27);
        static $functions = array("url" => 70);

        try {
            $this->sandbox->checkSecurity(
                ['set', 'if', 'block'],
                ['clean_class', 'escape'],
                ['url']
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
