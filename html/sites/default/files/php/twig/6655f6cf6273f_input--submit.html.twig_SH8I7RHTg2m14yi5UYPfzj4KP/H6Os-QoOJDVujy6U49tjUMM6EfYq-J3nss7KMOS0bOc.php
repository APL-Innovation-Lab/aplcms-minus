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

/* themes/contrib/aplpa/templates/input/input--submit.html.twig */
class __TwigTemplate_3d6a8e66c02730bb1af69e0d98bd573438d9aa7969a4576a63666fcc8eb8e493 extends \Twig\Template
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
        // line 13
        if (($context["input_group"] ?? null)) {
            // line 14
            echo "  <div class=\"input-group usa-form-group\">
";
        }
        // line 16
        echo "
";
        // line 17
        if (($context["prefix"] ?? null)) {
            // line 18
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["prefix"] ?? null), 18, $this->source), "html", null, true);
            echo "
";
        }
        // line 20
        echo "
";
        // line 21
        $this->displayBlock('input', $context, $blocks);
        // line 24
        echo "
";
        // line 25
        if (($context["suffix"] ?? null)) {
            // line 26
            echo "  ";
            echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["suffix"] ?? null), 26, $this->source), "html", null, true);
            echo "
";
        }
        // line 28
        echo "
";
        // line 29
        if (($context["input_group"] ?? null)) {
            // line 30
            echo "  </div>
";
        }
        // line 32
        echo "
";
        // line 33
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["children"] ?? null), 33, $this->source), "html", null, true);
        echo "
";
    }

    // line 21
    public function block_input($context, array $blocks = [])
    {
        $macros = $this->macros;
        // line 22
        echo "  <input";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(twig_get_attribute($this->env, $this->source, ($context["attributes"] ?? null), "addClass", [0 => "usa-button"], "method", false, false, true, 22), 22, $this->source), "html", null, true);
        echo " />
";
    }

    public function getTemplateName()
    {
        return "themes/contrib/aplpa/templates/input/input--submit.html.twig";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  95 => 22,  91 => 21,  85 => 33,  82 => 32,  78 => 30,  76 => 29,  73 => 28,  67 => 26,  65 => 25,  62 => 24,  60 => 21,  57 => 20,  51 => 18,  49 => 17,  46 => 16,  42 => 14,  40 => 13,);
    }

    public function getSourceContext()
    {
        return new Source("", "themes/contrib/aplpa/templates/input/input--submit.html.twig", "/var/www/html/html/themes/contrib/aplpa/templates/input/input--submit.html.twig");
    }
    
    public function checkSecurity()
    {
        static $tags = array("if" => 13, "block" => 21);
        static $filters = array("escape" => 18);
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
