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

/* themes/contrib/aplpa/templates/input/input.html.twig */
class __TwigTemplate_f3dd4fc11fff7a24003e7110c051432661488e0a7783782130b90864958fbb69 extends \Twig\Template
{
    private $source;
    private $macros = [];

    public function __construct(Environment $env)
    {
        parent::__construct($env);

        $this->source = $this->getSourceContext();

        $this->parent = false;

        $this->blocks = [
            'input' => [$this, 'block_input'],
        ];
        $this->sandbox = $this->env->getExtension('\Twig\Extension\SandboxExtension');
        $this->checkSecurity();
    }

    protected function doDisplay(array $context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 22
        if (($context["input_group"] ?? null)) {
            // line 23
            echo "  <div class=\"input-group usa-form-group\">
";
        }
        // line 25
        echo "
";
        // line 26
        if (($context["prefix"] ?? null)) {
            // line 27
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null), 27, $this->source), "html", null, true);
            echo "
";
        }
        // line 29
        echo "
";
        // line 30
        $this->displayBlock('input', $context, $blocks);
        // line 33
        echo "
";
        // line 34
        if (($context["suffix"] ?? null)) {
            // line 35
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 35, $this->source), "html", null, true);
            echo "
";
        }
        // line 37
        echo "
";
        // line 38
        if (($context["input_group"] ?? null)) {
            // line 39
            echo "  </div>
";
        }
        // line 41
        echo "
";
        // line 42
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 42, $this->source), "html", null, true);
        echo "
";
    }

    // line 30
    public function block_input($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 31
        echo "  <input";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "usa-input"], "method", false, false, true, 31), 31, $this->source), "html", null, true);
        echo " />
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/input/input.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 31,  91 => 30,  85 => 42,  82 => 41,  78 => 39,  76 => 38,  73 => 37,  67 => 35,  65 => 34,  62 => 33,  60 => 30,  57 => 29,  51 => 27,  49 => 26,  46 => 25,  42 => 23,  40 => 22,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/input/input.html.twig", "/var/www/html/html/themes/contrib/aplpa/templates/input/input.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 22, "block" => 30);
        static $filters = array("escape" => 27);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['if', 'block'],
                ['escape'],
                []
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
