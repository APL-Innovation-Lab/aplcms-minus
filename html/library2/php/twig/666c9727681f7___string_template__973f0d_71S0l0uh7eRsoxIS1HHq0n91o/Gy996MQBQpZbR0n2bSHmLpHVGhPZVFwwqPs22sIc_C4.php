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

/* __string_template__973f0dc6f97f6a8b133377dfa31a1dbe */
class __TwigTemplate_90c17e663f1f30ba0d08427a27e9de3f extends \Twig\Template
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
        $context["url_parts"] = twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["field_bibliocommons_list_url"] ?? null), 1, $this->source), "/");
        // line 2
        $context["last_part"] = (((array_key_exists("url_parts", $context) && (twig_length_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["url_parts"] ?? null), 2, $this->source)) > 0))) ? ((($__internal_compile_0 = ($context["url_parts"] ?? null)) && is_array($__internal_compile_0) || $__internal_compile_0 instanceof ArrayAccess ? ($__internal_compile_0[6] ?? null) : null)) : ("Array is empty or undefined"));
        // line 3
        $context["id_and_name"] = twig_split_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["last_part"] ?? null), 3, $this->source), "_");
        // line 4
        $context["only_integer"] = (((array_key_exists("id_and_name", $context) && (twig_length_filter($this->env, $this->sandbox->ensureToStringAllowed(($context["id_and_name"] ?? null), 4, $this->source)) > 0))) ? ((($__internal_compile_1 = ($context["id_and_name"] ?? null)) && is_array($__internal_compile_1) || $__internal_compile_1 instanceof ArrayAccess ? ($__internal_compile_1[0] ?? null) : null)) : ("Array is empty or undefined"));
        // line 5
        echo "<iframe scrolling=\"no\" frameborder=\"0\" height=\"315\" src=\"https://austin.bibliocommons.com/list/list_browse/user/";
        echo $this->extensions['Drupal\Core\Template\TwigExtension']->escapeFilter($this->env, $this->sandbox->ensureToStringAllowed(($context["only_integer"] ?? null), 5, $this->source), "html", null, true);
        echo "\"></iframe>
";
    }

    public function getTemplateName()
    {
        return "__string_template__973f0dc6f97f6a8b133377dfa31a1dbe";
    }

    public function isTraitable()
    {
        return false;
    }

    public function getDebugInfo()
    {
        return array (  47 => 5,  45 => 4,  43 => 3,  41 => 2,  39 => 1,);
    }

    public function getSourceContext()
    {
        return new Source("", "__string_template__973f0dc6f97f6a8b133377dfa31a1dbe", "");
    }
    
    public function checkSecurity()
    {
        static $tags = array("set" => 1);
        static $filters = array("split" => 1, "length" => 2, "escape" => 5);
        static $functions = array();

        try {
            $this->sandbox->checkSecurity(
                ['set'],
                ['split', 'length', 'escape'],
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
