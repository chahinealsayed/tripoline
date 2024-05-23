<?php

namespace app\widgets;

use app\components\inherits\base\Widget;
use yii\helpers\Url;
use yii\web\View;

class PageLoader extends Widget
{

  public function init()
  {
    parent::init();
    $this->_loadCss();
  }

  public function run()
  {
    return $this->_minifierHtml($this->render("page-loader.twig"));
  }

  private function _minifierHtml($code)
  {
    $search = array(

      // Remove whitespaces after tags
      '/\>[^\S ]+/s',

      // Remove whitespaces before tags
      '/[^\S ]+\</s',

      // Remove multiple whitespace sequences
      '/(\s)+/s',

      // Removes comments
      '/<!--(.|\s)*?-->/'
    );
    $replace = array('>', '<', '\\1');
    $code = preg_replace($search, $replace, $code);
    return $code;
  }

  private function _loadCss()
  {

    $imagesPath = str_replace(tier()->path, "", Url::base(true)) . "/images";

    $js = <<< JS
        document.addEventListener("readystatechange", async (event) => {
            if (event.target.readyState === "complete") {
              setTimeout(() => {
                document.querySelector(".page-loader")?.classList?.add("loaded");
              }, 500);
            }
        });
        addEventListener("beforeunload",  () => {
            document.querySelector(".page-loader")?.classList?.remove("loaded");
            document.querySelector(".page-loader")?.classList?.add("open");
        });
        JS;

    $css = <<< CSS
      :root{
        --color: var(--bs-primary);
        --bg: var(--bs-gray-200);
      }

      html[data-bs-theme=dark]{
        --color: var(--bs-orange);
        --bg: var(--bs-gray-900);
      }

      .page-loader{
        position: fixed;
        top: 0;
        left: 0;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        gap: 50px;
        font: 1em/1.5 "Varela Round", sans-serif;
        background-color: var(--bg);
        font-size: calc(16px + (20 - 16) * (100vw - 320px) / (1280 - 320));
        z-index: 99999;
        transition: all .5s linear;
        opacity: 1;
      }

      .page-loader.open {
        opacity: 1;
      }

      .page-loader.loaded {
        pointer-events: none;
        opacity: 0;
      }

      .page-loader .loader-wrapper{
        position: relative;
        margin: 0 auto;
        flex: auto;
        display: flex;
        flex-direction: row;
        gap: 100px;
        padding-top: 44px;
        justify-content: center;
        align-items: center;
        background: url('images/Tripoline-LogoPNG.png') no-repeat center;
        background-size:80%;
      }
      @media (max-width:767px){
      .page-loader .loader-wrapper{  
        background: url('images/Tripoline-LogoPNG.png') no-repeat center center;
        background-size:100%;
      }
      }


      .page-loader .loader-wrapper .loader {
        width: 100%;
        height: 300px;
        aspect-ratio: 1;
        position: relative;
      }
      /* .page-loader .loader-wrapper .loader:before,
      .page-loader .loader-wrapper .loader:after {
        content: "";
        position: absolute;
        border-radius: 50px;
        box-shadow: 0 0 0 3px inset var(--color);
        animation: loaderAnimation 2.5s infinite;
      }
      .page-loader .loader-wrapper .loader:after {
        animation-delay: -1.25s;
      } */
      @keyframes loaderAnimation {
        0% {
          inset: 0 35px 35px 0;
        }
        12.5% {
          inset: 0 35px 0 0;
        }
        25% {
          inset: 35px 35px 0 0;
        }
        37.5% {
          inset: 35px 0 0 0;
        }
        50% {
          inset: 35px 0 0 35px;
        }
        62.5% {
          inset: 0 0 0 35px;
        }
        75% {
          inset: 0 0 35px 35px;
        }
        87.5% {
          inset: 0 0 35px 0;
        }
        100% {
          inset: 0 35px 35px 0;
        }
      }

    CSS;

    $css = preg_replace('!/\*[^*]*\*+([^/][^*]*\*+)*/!', '', $css);
    // Remove spaces before and after selectors, braces, and colons
    $css = preg_replace('/\s*([{}|:;,])\s+/', '$1', $css);
    // Remove remaining spaces and line breaks
    $css = str_replace(array("\r\n", "\r", "\n", "\t", '  ', '    ', '    '), '', $css);

    $this->view->registerJs($js, View::POS_HEAD);
    $this->view->registerCss($css);
  }
}
