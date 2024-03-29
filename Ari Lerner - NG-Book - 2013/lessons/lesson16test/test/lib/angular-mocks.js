




<!DOCTYPE html>
<html class="  ">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    
    
    <title>bower-angular-mocks/angular-mocks.js at master · angular/bower-angular-mocks · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub" />
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub" />
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png" />
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png" />
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png" />
    <meta property="fb:app_id" content="1401488693436528"/>

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="angular/bower-angular-mocks" name="twitter:title" /><meta content="bower-angular-mocks - angular-mocks.js bower repo" name="twitter:description" /><meta content="https://avatars2.githubusercontent.com/u/139426?s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars2.githubusercontent.com/u/139426?s=400" property="og:image" /><meta content="angular/bower-angular-mocks" property="og:title" /><meta content="https://github.com/angular/bower-angular-mocks" property="og:url" /><meta content="bower-angular-mocks - angular-mocks.js bower repo" property="og:description" />

    <link rel="assets" href="https://github.global.ssl.fastly.net/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035/">
    <link rel="xhr-socket" href="/_sockets" />

    <meta name="msapplication-TileImage" content="/windows-tile.png" />
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="selected-link" value="repo_source" data-pjax-transient />
    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="B2893E53:2BDD:1CC4ADC:53396483" name="octolytics-dimension-request_id" />
    

    
    
    <link rel="icon" type="image/x-icon" href="https://github.global.ssl.fastly.net/favicon.ico" />

    <meta content="authenticity_token" name="csrf-param" />
<meta content="TWzuJ3qzlKl0VLR2/JUjwZZ+ynCTNCXmg6MR5Xl4GgE=" name="csrf-token" />

    <link href="https://github.global.ssl.fastly.net/assets/github-b4baae9c06716bcd0a8068e3030607851f19b980.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://github.global.ssl.fastly.net/assets/github2-ee8765cd653592918845477123b0e6f2dc3bc00a.css" media="all" rel="stylesheet" type="text/css" />
    


        <script crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/frameworks-4ffe0645461d6fd51485ee3e555a732ee7075743.js" type="text/javascript"></script>
        <script async="async" crossorigin="anonymous" src="https://github.global.ssl.fastly.net/assets/github-8569770199d7c3e78f612511392c027e9a5ccc0d.js" type="text/javascript"></script>
        
        
      <meta http-equiv="x-pjax-version" content="2a64374654fdf2c003e19d968f33dde4">

        <link data-pjax-transient rel='permalink' href='/angular/bower-angular-mocks/blob/573447ea342c2edbb8bbd776fa132876c8ae4457/angular-mocks.js'>

  <meta name="description" content="bower-angular-mocks - angular-mocks.js bower repo" />

  <meta content="139426" name="octolytics-dimension-user_id" /><meta content="angular" name="octolytics-dimension-user_login" /><meta content="8195265" name="octolytics-dimension-repository_id" /><meta content="angular/bower-angular-mocks" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="false" name="octolytics-dimension-repository_is_fork" /><meta content="8195265" name="octolytics-dimension-repository_network_root_id" /><meta content="angular/bower-angular-mocks" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/angular/bower-angular-mocks/commits/master.atom" rel="alternate" title="Recent Commits to bower-angular-mocks:master" type="application/atom+xml" />

  </head>


  <body class="logged_out  env-production windows vis-public page-blob">
    <a href="#start-of-content" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions">
        <a class="button primary" href="/join">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fangular%2Fbower-angular-mocks%2Fblob%2Fmaster%2Fangular-mocks.js">Sign in</a>
    </div>

    <div class="command-bar js-command-bar  in-repository">

      <ul class="top-nav">
          <li class="explore"><a href="/explore">Explore</a></li>
        <li class="features"><a href="/features">Features</a></li>
          <li class="enterprise"><a href="https://enterprise.github.com/">Enterprise</a></li>
          <li class="blog"><a href="/blog">Blog</a></li>
      </ul>
        <form accept-charset="UTF-8" action="/search" class="command-bar-form" id="top_search_form" method="get">

<div class="commandbar">
  <span class="message"></span>
  <input type="text" data-hotkey="/ s" name="q" id="js-command-bar-field" placeholder="Search or type a command" tabindex="1" autocapitalize="off"
    
    
      data-repo="angular/bower-angular-mocks"
      data-branch="master"
      data-sha="d600bcd45ff2cd8a80394bb8f3d6c70fa038e34a"
  >
  <div class="display hidden"></div>
</div>

    <input type="hidden" name="nwo" value="angular/bower-angular-mocks" />

    <div class="select-menu js-menu-container js-select-menu search-context-select-menu">
      <span class="minibutton select-menu-button js-menu-target" role="button" aria-haspopup="true">
        <span class="js-select-button">This repository</span>
      </span>

      <div class="select-menu-modal-holder js-menu-content js-navigation-container" aria-hidden="true">
        <div class="select-menu-modal">

          <div class="select-menu-item js-navigation-item js-this-repository-navigation-item selected">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" class="js-search-this-repository" name="search_target" value="repository" checked="checked" />
            <div class="select-menu-item-text js-select-button-text">This repository</div>
          </div> <!-- /.select-menu-item -->

          <div class="select-menu-item js-navigation-item js-all-repositories-navigation-item">
            <span class="select-menu-item-icon octicon octicon-check"></span>
            <input type="radio" name="search_target" value="global" />
            <div class="select-menu-item-text js-select-button-text">All repositories</div>
          </div> <!-- /.select-menu-item -->

        </div>
      </div>
    </div>

  <span class="help tooltipped tooltipped-s" aria-label="Show command bar help">
    <span class="octicon octicon-question"></span>
  </span>


  <input type="hidden" name="ref" value="cmdform">

</form>
    </div>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        

<ul class="pagehead-actions">


  <li>
    <a href="/login?return_to=%2Fangular%2Fbower-angular-mocks"
    class="minibutton with-count js-toggler-target star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>Star
  </a>

    <a class="social-count js-social-count" href="/angular/bower-angular-mocks/stargazers">
      10
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fangular%2Fbower-angular-mocks"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-git-branch"></span>Fork
      </a>
      <a href="/angular/bower-angular-mocks/network" class="social-count">
        41
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="repo-label"><span>public</span></span>
          <span class="mega-octicon octicon-repo"></span>
          <span class="author">
            <a href="/angular" class="url fn" itemprop="url" rel="author"><span itemprop="title">angular</span></a>
          </span>
          <span class="repohead-name-divider">/</span>
          <strong><a href="/angular/bower-angular-mocks" class="js-current-repository js-repo-home-link">bower-angular-mocks</a></strong>

          <span class="page-context-loader">
            <img alt="Octocat-spinner-32" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline js-new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            

<div class="sunken-menu vertical-right repo-nav js-repo-nav js-repository-container-pjax js-octicon-loaders">
  <div class="sunken-menu-contents">
    <ul class="sunken-menu-group">
      <li class="tooltipped tooltipped-w" aria-label="Code">
        <a href="/angular/bower-angular-mocks" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-gotokey="c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_tags repo_branches /angular/bower-angular-mocks">
          <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


      <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
        <a href="/angular/bower-angular-mocks/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-gotokey="p" data-selected-links="repo_pulls /angular/bower-angular-mocks/pulls">
            <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
            <span class='counter'>1</span>
            <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>


    </ul>
    <div class="sunken-menu-separator"></div>
    <ul class="sunken-menu-group">

      <li class="tooltipped tooltipped-w" aria-label="Pulse">
        <a href="/angular/bower-angular-mocks/pulse" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /angular/bower-angular-mocks/pulse">
          <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Graphs">
        <a href="/angular/bower-angular-mocks/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /angular/bower-angular-mocks/graphs">
          <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

      <li class="tooltipped tooltipped-w" aria-label="Network">
        <a href="/angular/bower-angular-mocks/network" aria-label="Network" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-selected-links="repo_network /angular/bower-angular-mocks/network">
          <span class="octicon octicon-git-branch"></span> <span class="full-word">Network</span>
          <img alt="Octocat-spinner-32" class="mini-loader" height="16" src="https://github.global.ssl.fastly.net/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>
    </ul>


  </div>
</div>

              <div class="only-with-full-nav">
                

  

<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><strong>HTTPS</strong> clone URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/angular/bower-angular-mocks.git" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/bower-angular-mocks.git" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>

  

<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><strong>Subversion</strong> checkout URL</h3>
  <div class="clone-url-box">
    <input type="text" class="clone js-url-field"
           value="https://github.com/angular/bower-angular-mocks" readonly="readonly">

    <span aria-label="copy to clipboard" class="js-zeroclipboard url-box-clippy minibutton zeroclipboard-button" data-clipboard-text="https://github.com/angular/bower-angular-mocks" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <span class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <a href="https://help.github.com/articles/which-remote-url-should-i-use">
    <span class="octicon octicon-question"></span>
    </a>
  </span>
</p>


  <a href="http://windows.github.com" class="minibutton sidebar-button" title="Save angular/bower-angular-mocks to your computer and use it in GitHub Desktop." aria-label="Save angular/bower-angular-mocks to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>

                <a href="/angular/bower-angular-mocks/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download angular/bower-angular-mocks as a zip file"
                   title="Download angular/bower-angular-mocks as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          


<!-- blob contrib key: blob_contributors:v21:d7c16701f576b3d7be8a7bc3f57b6749 -->

<p title="This is a placeholder element" class="js-history-link-replace hidden"></p>

<a href="/angular/bower-angular-mocks/find/master" data-pjax data-hotkey="t" class="js-show-file-finder" style="display:none">Show File Finder</a>

<div class="file-navigation">
  

<div class="select-menu js-menu-container js-select-menu" >
  <span class="minibutton select-menu-button js-menu-target" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-remove-close js-menu-close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/blob/master/angular-mocks.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/blob/unstable/angular-mocks.js"
                 data-name="unstable"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="unstable">unstable</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2535+sha.876df04/angular-mocks.js"
                 data-name="v1.3.0-build.2535+sha.876df04"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2535+sha.876df04">v1.3.0-build.2535+sha.876df04</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2534+sha.908ab52/angular-mocks.js"
                 data-name="v1.3.0-build.2534+sha.908ab52"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2534+sha.908ab52">v1.3.0-build.2534+sha.908ab52</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2533+sha.ff5cf73/angular-mocks.js"
                 data-name="v1.3.0-build.2533+sha.ff5cf73"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2533+sha.ff5cf73">v1.3.0-build.2533+sha.ff5cf73</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2532+sha.f552f25/angular-mocks.js"
                 data-name="v1.3.0-build.2532+sha.f552f25"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2532+sha.f552f25">v1.3.0-build.2532+sha.f552f25</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2531+sha.ec8e395/angular-mocks.js"
                 data-name="v1.3.0-build.2531+sha.ec8e395"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2531+sha.ec8e395">v1.3.0-build.2531+sha.ec8e395</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2530+sha.d0df8c8/angular-mocks.js"
                 data-name="v1.3.0-build.2530+sha.d0df8c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2530+sha.d0df8c8">v1.3.0-build.2530+sha.d0df8c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2529+sha.d0df8c8/angular-mocks.js"
                 data-name="v1.3.0-build.2529+sha.d0df8c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2529+sha.d0df8c8">v1.3.0-build.2529+sha.d0df8c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2528+sha.b1d1cb6/angular-mocks.js"
                 data-name="v1.3.0-build.2528+sha.b1d1cb6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2528+sha.b1d1cb6">v1.3.0-build.2528+sha.b1d1cb6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2527+sha.1d2414c/angular-mocks.js"
                 data-name="v1.3.0-build.2527+sha.1d2414c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2527+sha.1d2414c">v1.3.0-build.2527+sha.1d2414c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2526+sha.9f62d9d/angular-mocks.js"
                 data-name="v1.3.0-build.2526+sha.9f62d9d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2526+sha.9f62d9d">v1.3.0-build.2526+sha.9f62d9d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2525+sha.08354ae/angular-mocks.js"
                 data-name="v1.3.0-build.2525+sha.08354ae"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2525+sha.08354ae">v1.3.0-build.2525+sha.08354ae</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2524+sha.3f9f1ad/angular-mocks.js"
                 data-name="v1.3.0-build.2524+sha.3f9f1ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2524+sha.3f9f1ad">v1.3.0-build.2524+sha.3f9f1ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2523+sha.a2aa667/angular-mocks.js"
                 data-name="v1.3.0-build.2523+sha.a2aa667"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2523+sha.a2aa667">v1.3.0-build.2523+sha.a2aa667</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2522+sha.0619e6f/angular-mocks.js"
                 data-name="v1.3.0-build.2522+sha.0619e6f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2522+sha.0619e6f">v1.3.0-build.2522+sha.0619e6f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2521+sha.545c62a/angular-mocks.js"
                 data-name="v1.3.0-build.2521+sha.545c62a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2521+sha.545c62a">v1.3.0-build.2521+sha.545c62a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2520+sha.7a7e9f4/angular-mocks.js"
                 data-name="v1.3.0-build.2520+sha.7a7e9f4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2520+sha.7a7e9f4">v1.3.0-build.2520+sha.7a7e9f4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2519+sha.489d0d4/angular-mocks.js"
                 data-name="v1.3.0-build.2519+sha.489d0d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2519+sha.489d0d4">v1.3.0-build.2519+sha.489d0d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2518+sha.47ba601/angular-mocks.js"
                 data-name="v1.3.0-build.2518+sha.47ba601"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2518+sha.47ba601">v1.3.0-build.2518+sha.47ba601</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2517+sha.1bebe36/angular-mocks.js"
                 data-name="v1.3.0-build.2517+sha.1bebe36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2517+sha.1bebe36">v1.3.0-build.2517+sha.1bebe36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2516+sha.2317af6/angular-mocks.js"
                 data-name="v1.3.0-build.2516+sha.2317af6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2516+sha.2317af6">v1.3.0-build.2516+sha.2317af6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2515+sha.3bf8d6c/angular-mocks.js"
                 data-name="v1.3.0-build.2515+sha.3bf8d6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2515+sha.3bf8d6c">v1.3.0-build.2515+sha.3bf8d6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2511+sha.ca1d126/angular-mocks.js"
                 data-name="v1.3.0-build.2511+sha.ca1d126"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2511+sha.ca1d126">v1.3.0-build.2511+sha.ca1d126</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2510+sha.d6bcbc7/angular-mocks.js"
                 data-name="v1.3.0-build.2510+sha.d6bcbc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2510+sha.d6bcbc7">v1.3.0-build.2510+sha.d6bcbc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2509+sha.d6bcbc7/angular-mocks.js"
                 data-name="v1.3.0-build.2509+sha.d6bcbc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2509+sha.d6bcbc7">v1.3.0-build.2509+sha.d6bcbc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2508+sha.9d07796/angular-mocks.js"
                 data-name="v1.3.0-build.2508+sha.9d07796"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2508+sha.9d07796">v1.3.0-build.2508+sha.9d07796</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2507+sha.074648e/angular-mocks.js"
                 data-name="v1.3.0-build.2507+sha.074648e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2507+sha.074648e">v1.3.0-build.2507+sha.074648e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2506+sha.008fbe5/angular-mocks.js"
                 data-name="v1.3.0-build.2506+sha.008fbe5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2506+sha.008fbe5">v1.3.0-build.2506+sha.008fbe5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2505+sha.ae342b5/angular-mocks.js"
                 data-name="v1.3.0-build.2505+sha.ae342b5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2505+sha.ae342b5">v1.3.0-build.2505+sha.ae342b5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2504+sha.726ffdc/angular-mocks.js"
                 data-name="v1.3.0-build.2504+sha.726ffdc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2504+sha.726ffdc">v1.3.0-build.2504+sha.726ffdc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2503+sha.b93ca85/angular-mocks.js"
                 data-name="v1.3.0-build.2503+sha.b93ca85"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2503+sha.b93ca85">v1.3.0-build.2503+sha.b93ca85</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2502+sha.0779b6b/angular-mocks.js"
                 data-name="v1.3.0-build.2502+sha.0779b6b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2502+sha.0779b6b">v1.3.0-build.2502+sha.0779b6b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2501+sha.6e34da6/angular-mocks.js"
                 data-name="v1.3.0-build.2501+sha.6e34da6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2501+sha.6e34da6">v1.3.0-build.2501+sha.6e34da6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2500+sha.a2acd79/angular-mocks.js"
                 data-name="v1.3.0-build.2500+sha.a2acd79"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2500+sha.a2acd79">v1.3.0-build.2500+sha.a2acd79</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2499+sha.3982d9b/angular-mocks.js"
                 data-name="v1.3.0-build.2499+sha.3982d9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2499+sha.3982d9b">v1.3.0-build.2499+sha.3982d9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2498+sha.ccba305/angular-mocks.js"
                 data-name="v1.3.0-build.2498+sha.ccba305"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2498+sha.ccba305">v1.3.0-build.2498+sha.ccba305</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2497+sha.3f609f9/angular-mocks.js"
                 data-name="v1.3.0-build.2497+sha.3f609f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2497+sha.3f609f9">v1.3.0-build.2497+sha.3f609f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2496+sha.76dbb6e/angular-mocks.js"
                 data-name="v1.3.0-build.2496+sha.76dbb6e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2496+sha.76dbb6e">v1.3.0-build.2496+sha.76dbb6e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2495+sha.4a6d4de/angular-mocks.js"
                 data-name="v1.3.0-build.2495+sha.4a6d4de"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2495+sha.4a6d4de">v1.3.0-build.2495+sha.4a6d4de</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2494+sha.b472d02/angular-mocks.js"
                 data-name="v1.3.0-build.2494+sha.b472d02"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2494+sha.b472d02">v1.3.0-build.2494+sha.b472d02</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2493+sha.8339c2e/angular-mocks.js"
                 data-name="v1.3.0-build.2493+sha.8339c2e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2493+sha.8339c2e">v1.3.0-build.2493+sha.8339c2e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2492+sha.34a10c6/angular-mocks.js"
                 data-name="v1.3.0-build.2492+sha.34a10c6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2492+sha.34a10c6">v1.3.0-build.2492+sha.34a10c6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2491+sha.635cdaa/angular-mocks.js"
                 data-name="v1.3.0-build.2491+sha.635cdaa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2491+sha.635cdaa">v1.3.0-build.2491+sha.635cdaa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2490+sha.c7a49b3/angular-mocks.js"
                 data-name="v1.3.0-build.2490+sha.c7a49b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2490+sha.c7a49b3">v1.3.0-build.2490+sha.c7a49b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2489+sha.408d958/angular-mocks.js"
                 data-name="v1.3.0-build.2489+sha.408d958"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2489+sha.408d958">v1.3.0-build.2489+sha.408d958</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2488+sha.3f2d756/angular-mocks.js"
                 data-name="v1.3.0-build.2488+sha.3f2d756"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2488+sha.3f2d756">v1.3.0-build.2488+sha.3f2d756</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2487+sha.6011145/angular-mocks.js"
                 data-name="v1.3.0-build.2487+sha.6011145"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2487+sha.6011145">v1.3.0-build.2487+sha.6011145</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2486+sha.b26fc23/angular-mocks.js"
                 data-name="v1.3.0-build.2486+sha.b26fc23"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2486+sha.b26fc23">v1.3.0-build.2486+sha.b26fc23</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2485+sha.0c930a1/angular-mocks.js"
                 data-name="v1.3.0-build.2485+sha.0c930a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2485+sha.0c930a1">v1.3.0-build.2485+sha.0c930a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2484+sha.2f61b2f/angular-mocks.js"
                 data-name="v1.3.0-build.2484+sha.2f61b2f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2484+sha.2f61b2f">v1.3.0-build.2484+sha.2f61b2f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2483+sha.64363af/angular-mocks.js"
                 data-name="v1.3.0-build.2483+sha.64363af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2483+sha.64363af">v1.3.0-build.2483+sha.64363af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2482+sha.4d4da55/angular-mocks.js"
                 data-name="v1.3.0-build.2482+sha.4d4da55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2482+sha.4d4da55">v1.3.0-build.2482+sha.4d4da55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2481+sha.58f5da8/angular-mocks.js"
                 data-name="v1.3.0-build.2481+sha.58f5da8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2481+sha.58f5da8">v1.3.0-build.2481+sha.58f5da8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2480+sha.fb6062f/angular-mocks.js"
                 data-name="v1.3.0-build.2480+sha.fb6062f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2480+sha.fb6062f">v1.3.0-build.2480+sha.fb6062f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2479+sha.0c65f1a/angular-mocks.js"
                 data-name="v1.3.0-build.2479+sha.0c65f1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2479+sha.0c65f1a">v1.3.0-build.2479+sha.0c65f1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2478+sha.f40f54c/angular-mocks.js"
                 data-name="v1.3.0-build.2478+sha.f40f54c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2478+sha.f40f54c">v1.3.0-build.2478+sha.f40f54c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2477+sha.37bc5ef/angular-mocks.js"
                 data-name="v1.3.0-build.2477+sha.37bc5ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2477+sha.37bc5ef">v1.3.0-build.2477+sha.37bc5ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2476+sha.bc42950/angular-mocks.js"
                 data-name="v1.3.0-build.2476+sha.bc42950"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2476+sha.bc42950">v1.3.0-build.2476+sha.bc42950</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2475+sha.6680b7b/angular-mocks.js"
                 data-name="v1.3.0-build.2475+sha.6680b7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2475+sha.6680b7b">v1.3.0-build.2475+sha.6680b7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2474+sha.c839f78/angular-mocks.js"
                 data-name="v1.3.0-build.2474+sha.c839f78"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2474+sha.c839f78">v1.3.0-build.2474+sha.c839f78</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2473+sha.f7ce415/angular-mocks.js"
                 data-name="v1.3.0-build.2473+sha.f7ce415"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2473+sha.f7ce415">v1.3.0-build.2473+sha.f7ce415</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2472+sha.4cf2adf/angular-mocks.js"
                 data-name="v1.3.0-build.2472+sha.4cf2adf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2472+sha.4cf2adf">v1.3.0-build.2472+sha.4cf2adf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2471+sha.2b84f43/angular-mocks.js"
                 data-name="v1.3.0-build.2471+sha.2b84f43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2471+sha.2b84f43">v1.3.0-build.2471+sha.2b84f43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2469+sha.299b220/angular-mocks.js"
                 data-name="v1.3.0-build.2469+sha.299b220"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2469+sha.299b220">v1.3.0-build.2469+sha.299b220</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2468+sha.78057a9/angular-mocks.js"
                 data-name="v1.3.0-build.2468+sha.78057a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2468+sha.78057a9">v1.3.0-build.2468+sha.78057a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2467+sha.748a6c8/angular-mocks.js"
                 data-name="v1.3.0-build.2467+sha.748a6c8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2467+sha.748a6c8">v1.3.0-build.2467+sha.748a6c8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2466+sha.ed4cd6c/angular-mocks.js"
                 data-name="v1.3.0-build.2466+sha.ed4cd6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2466+sha.ed4cd6c">v1.3.0-build.2466+sha.ed4cd6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2465+sha.4cc00e7/angular-mocks.js"
                 data-name="v1.3.0-build.2465+sha.4cc00e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2465+sha.4cc00e7">v1.3.0-build.2465+sha.4cc00e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2464+sha.f7b3684/angular-mocks.js"
                 data-name="v1.3.0-build.2464+sha.f7b3684"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2464+sha.f7b3684">v1.3.0-build.2464+sha.f7b3684</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2463+sha.f8f97f8/angular-mocks.js"
                 data-name="v1.3.0-build.2463+sha.f8f97f8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2463+sha.f8f97f8">v1.3.0-build.2463+sha.f8f97f8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2460+sha.547871e/angular-mocks.js"
                 data-name="v1.3.0-build.2460+sha.547871e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2460+sha.547871e">v1.3.0-build.2460+sha.547871e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2459+sha.a4b70cf/angular-mocks.js"
                 data-name="v1.3.0-build.2459+sha.a4b70cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2459+sha.a4b70cf">v1.3.0-build.2459+sha.a4b70cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2458+sha.c9fbb47/angular-mocks.js"
                 data-name="v1.3.0-build.2458+sha.c9fbb47"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2458+sha.c9fbb47">v1.3.0-build.2458+sha.c9fbb47</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2457+sha.ed22869/angular-mocks.js"
                 data-name="v1.3.0-build.2457+sha.ed22869"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2457+sha.ed22869">v1.3.0-build.2457+sha.ed22869</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2456+sha.e381c4d/angular-mocks.js"
                 data-name="v1.3.0-build.2456+sha.e381c4d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2456+sha.e381c4d">v1.3.0-build.2456+sha.e381c4d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2455+sha.68e84ac/angular-mocks.js"
                 data-name="v1.3.0-build.2455+sha.68e84ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2455+sha.68e84ac">v1.3.0-build.2455+sha.68e84ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2454+sha.e118a8b/angular-mocks.js"
                 data-name="v1.3.0-build.2454+sha.e118a8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2454+sha.e118a8b">v1.3.0-build.2454+sha.e118a8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2453+sha.e118a8b/angular-mocks.js"
                 data-name="v1.3.0-build.2453+sha.e118a8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2453+sha.e118a8b">v1.3.0-build.2453+sha.e118a8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2452+sha.9202767/angular-mocks.js"
                 data-name="v1.3.0-build.2452+sha.9202767"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2452+sha.9202767">v1.3.0-build.2452+sha.9202767</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2451+sha.c995b09/angular-mocks.js"
                 data-name="v1.3.0-build.2451+sha.c995b09"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2451+sha.c995b09">v1.3.0-build.2451+sha.c995b09</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2450+sha.8a96f31/angular-mocks.js"
                 data-name="v1.3.0-build.2450+sha.8a96f31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2450+sha.8a96f31">v1.3.0-build.2450+sha.8a96f31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2449+sha.d3aa14b/angular-mocks.js"
                 data-name="v1.3.0-build.2449+sha.d3aa14b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2449+sha.d3aa14b">v1.3.0-build.2449+sha.d3aa14b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2448+sha.cd49876/angular-mocks.js"
                 data-name="v1.3.0-build.2448+sha.cd49876"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2448+sha.cd49876">v1.3.0-build.2448+sha.cd49876</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2447+sha.55a0bc4/angular-mocks.js"
                 data-name="v1.3.0-build.2447+sha.55a0bc4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2447+sha.55a0bc4">v1.3.0-build.2447+sha.55a0bc4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2446+sha.2daaf3e/angular-mocks.js"
                 data-name="v1.3.0-build.2446+sha.2daaf3e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2446+sha.2daaf3e">v1.3.0-build.2446+sha.2daaf3e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2445+sha.e1484cd/angular-mocks.js"
                 data-name="v1.3.0-build.2445+sha.e1484cd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2445+sha.e1484cd">v1.3.0-build.2445+sha.e1484cd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2444+sha.d0781eb/angular-mocks.js"
                 data-name="v1.3.0-build.2444+sha.d0781eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2444+sha.d0781eb">v1.3.0-build.2444+sha.d0781eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2443+sha.d09056d/angular-mocks.js"
                 data-name="v1.3.0-build.2443+sha.d09056d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2443+sha.d09056d">v1.3.0-build.2443+sha.d09056d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2442+sha.849e447/angular-mocks.js"
                 data-name="v1.3.0-build.2442+sha.849e447"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2442+sha.849e447">v1.3.0-build.2442+sha.849e447</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2441+sha.f55278f/angular-mocks.js"
                 data-name="v1.3.0-build.2441+sha.f55278f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2441+sha.f55278f">v1.3.0-build.2441+sha.f55278f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2440+sha.df56241/angular-mocks.js"
                 data-name="v1.3.0-build.2440+sha.df56241"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2440+sha.df56241">v1.3.0-build.2440+sha.df56241</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2439+sha.91e6d1d/angular-mocks.js"
                 data-name="v1.3.0-build.2439+sha.91e6d1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2439+sha.91e6d1d">v1.3.0-build.2439+sha.91e6d1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2438+sha.b8cc71d/angular-mocks.js"
                 data-name="v1.3.0-build.2438+sha.b8cc71d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2438+sha.b8cc71d">v1.3.0-build.2438+sha.b8cc71d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2437+sha.511422a/angular-mocks.js"
                 data-name="v1.3.0-build.2437+sha.511422a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2437+sha.511422a">v1.3.0-build.2437+sha.511422a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2436+sha.a15d9cb/angular-mocks.js"
                 data-name="v1.3.0-build.2436+sha.a15d9cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2436+sha.a15d9cb">v1.3.0-build.2436+sha.a15d9cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2435+sha.9bfbb16/angular-mocks.js"
                 data-name="v1.3.0-build.2435+sha.9bfbb16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2435+sha.9bfbb16">v1.3.0-build.2435+sha.9bfbb16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2434+sha.2b741dc/angular-mocks.js"
                 data-name="v1.3.0-build.2434+sha.2b741dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2434+sha.2b741dc">v1.3.0-build.2434+sha.2b741dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2433+sha.e888dde/angular-mocks.js"
                 data-name="v1.3.0-build.2433+sha.e888dde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2433+sha.e888dde">v1.3.0-build.2433+sha.e888dde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2432+sha.d5294eb/angular-mocks.js"
                 data-name="v1.3.0-build.2432+sha.d5294eb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2432+sha.d5294eb">v1.3.0-build.2432+sha.d5294eb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2431+sha.44b940e/angular-mocks.js"
                 data-name="v1.3.0-build.2431+sha.44b940e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2431+sha.44b940e">v1.3.0-build.2431+sha.44b940e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2430+sha.56e73ea/angular-mocks.js"
                 data-name="v1.3.0-build.2430+sha.56e73ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2430+sha.56e73ea">v1.3.0-build.2430+sha.56e73ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2429+sha.bfb6af7/angular-mocks.js"
                 data-name="v1.3.0-build.2429+sha.bfb6af7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2429+sha.bfb6af7">v1.3.0-build.2429+sha.bfb6af7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2428+sha.d7be958/angular-mocks.js"
                 data-name="v1.3.0-build.2428+sha.d7be958"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2428+sha.d7be958">v1.3.0-build.2428+sha.d7be958</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2427+sha.53e4da8/angular-mocks.js"
                 data-name="v1.3.0-build.2427+sha.53e4da8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2427+sha.53e4da8">v1.3.0-build.2427+sha.53e4da8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2426+sha.7b5e019/angular-mocks.js"
                 data-name="v1.3.0-build.2426+sha.7b5e019"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2426+sha.7b5e019">v1.3.0-build.2426+sha.7b5e019</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2425+sha.3cc02e7/angular-mocks.js"
                 data-name="v1.3.0-build.2425+sha.3cc02e7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2425+sha.3cc02e7">v1.3.0-build.2425+sha.3cc02e7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2424+sha.79592ce/angular-mocks.js"
                 data-name="v1.3.0-build.2424+sha.79592ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2424+sha.79592ce">v1.3.0-build.2424+sha.79592ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2423+sha.a9a38d8/angular-mocks.js"
                 data-name="v1.3.0-build.2423+sha.a9a38d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2423+sha.a9a38d8">v1.3.0-build.2423+sha.a9a38d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2422+sha.cea44b3/angular-mocks.js"
                 data-name="v1.3.0-build.2422+sha.cea44b3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2422+sha.cea44b3">v1.3.0-build.2422+sha.cea44b3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2421+sha.e8c6b9b/angular-mocks.js"
                 data-name="v1.3.0-build.2421+sha.e8c6b9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2421+sha.e8c6b9b">v1.3.0-build.2421+sha.e8c6b9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2420+sha.5412372/angular-mocks.js"
                 data-name="v1.3.0-build.2420+sha.5412372"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2420+sha.5412372">v1.3.0-build.2420+sha.5412372</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2419+sha.fe0e434/angular-mocks.js"
                 data-name="v1.3.0-build.2419+sha.fe0e434"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2419+sha.fe0e434">v1.3.0-build.2419+sha.fe0e434</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2418+sha.edad4e6/angular-mocks.js"
                 data-name="v1.3.0-build.2418+sha.edad4e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2418+sha.edad4e6">v1.3.0-build.2418+sha.edad4e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2417+sha.f684cb0/angular-mocks.js"
                 data-name="v1.3.0-build.2417+sha.f684cb0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2417+sha.f684cb0">v1.3.0-build.2417+sha.f684cb0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2416+sha.d7717d9/angular-mocks.js"
                 data-name="v1.3.0-build.2416+sha.d7717d9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2416+sha.d7717d9">v1.3.0-build.2416+sha.d7717d9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2415+sha.247ec19/angular-mocks.js"
                 data-name="v1.3.0-build.2415+sha.247ec19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2415+sha.247ec19">v1.3.0-build.2415+sha.247ec19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2414+sha.78165c2/angular-mocks.js"
                 data-name="v1.3.0-build.2414+sha.78165c2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2414+sha.78165c2">v1.3.0-build.2414+sha.78165c2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.2413+sha.d1214af/angular-mocks.js"
                 data-name="v1.3.0-build.2413+sha.d1214af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.2413+sha.d1214af">v1.3.0-build.2413+sha.d1214af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-build.51+sha.e888dde/angular-mocks.js"
                 data-name="v1.3.0-build.51+sha.e888dde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-build.51+sha.e888dde">v1.3.0-build.51+sha.e888dde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.4/angular-mocks.js"
                 data-name="v1.3.0-beta.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.4">v1.3.0-beta.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.3/angular-mocks.js"
                 data-name="v1.3.0-beta.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.3">v1.3.0-beta.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2412+sha.d6419d0/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2412+sha.d6419d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2412+sha.d6419d0">v1.3.0-beta.2-build.2412+sha.d6419d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2411+sha.0f13f24/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2411+sha.0f13f24"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2411+sha.0f13f24">v1.3.0-beta.2-build.2411+sha.0f13f24</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2410+sha.0d8de2d/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2410+sha.0d8de2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2410+sha.0d8de2d">v1.3.0-beta.2-build.2410+sha.0d8de2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2409+sha.7833ce0/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2409+sha.7833ce0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2409+sha.7833ce0">v1.3.0-beta.2-build.2409+sha.7833ce0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2408+sha.47ab8df/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2408+sha.47ab8df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2408+sha.47ab8df">v1.3.0-beta.2-build.2408+sha.47ab8df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2407+sha.b700282/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2407+sha.b700282"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2407+sha.b700282">v1.3.0-beta.2-build.2407+sha.b700282</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2406+sha.1b9395e/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2406+sha.1b9395e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2406+sha.1b9395e">v1.3.0-beta.2-build.2406+sha.1b9395e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2405+sha.1b9395e/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2405+sha.1b9395e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2405+sha.1b9395e">v1.3.0-beta.2-build.2405+sha.1b9395e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2404+sha.44d160e/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2404+sha.44d160e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2404+sha.44d160e">v1.3.0-beta.2-build.2404+sha.44d160e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2403+sha.4f90c9b/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2403+sha.4f90c9b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2403+sha.4f90c9b">v1.3.0-beta.2-build.2403+sha.4f90c9b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2402+sha.11aceac/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2402+sha.11aceac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2402+sha.11aceac">v1.3.0-beta.2-build.2402+sha.11aceac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2-build.2401+sha.f08bf6f/angular-mocks.js"
                 data-name="v1.3.0-beta.2-build.2401+sha.f08bf6f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2-build.2401+sha.f08bf6f">v1.3.0-beta.2-build.2401+sha.f08bf6f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.2/angular-mocks.js"
                 data-name="v1.3.0-beta.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.2">v1.3.0-beta.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.3.0-beta.1/angular-mocks.js"
                 data-name="v1.3.0-beta.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.3.0-beta.1">v1.3.0-beta.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.63+sha.8d4d437/angular-mocks.js"
                 data-name="v1.2.16-build.63+sha.8d4d437"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.63+sha.8d4d437">v1.2.16-build.63+sha.8d4d437</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.62+sha.7287dbf/angular-mocks.js"
                 data-name="v1.2.16-build.62+sha.7287dbf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.62+sha.7287dbf">v1.2.16-build.62+sha.7287dbf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.61+sha.8a59724/angular-mocks.js"
                 data-name="v1.2.16-build.61+sha.8a59724"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.61+sha.8a59724">v1.2.16-build.61+sha.8a59724</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.60+sha.8a59724/angular-mocks.js"
                 data-name="v1.2.16-build.60+sha.8a59724"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.60+sha.8a59724">v1.2.16-build.60+sha.8a59724</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.59+sha.35d635c/angular-mocks.js"
                 data-name="v1.2.16-build.59+sha.35d635c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.59+sha.35d635c">v1.2.16-build.59+sha.35d635c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.58+sha.db2a4c0/angular-mocks.js"
                 data-name="v1.2.16-build.58+sha.db2a4c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.58+sha.db2a4c0">v1.2.16-build.58+sha.db2a4c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.57+sha.0d62257/angular-mocks.js"
                 data-name="v1.2.16-build.57+sha.0d62257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.57+sha.0d62257">v1.2.16-build.57+sha.0d62257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.56+sha.f911b84/angular-mocks.js"
                 data-name="v1.2.16-build.56+sha.f911b84"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.56+sha.f911b84">v1.2.16-build.56+sha.f911b84</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.55+sha.32c09c1/angular-mocks.js"
                 data-name="v1.2.16-build.55+sha.32c09c1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.55+sha.32c09c1">v1.2.16-build.55+sha.32c09c1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.54+sha.2606437/angular-mocks.js"
                 data-name="v1.2.16-build.54+sha.2606437"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.54+sha.2606437">v1.2.16-build.54+sha.2606437</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.53+sha.7a29436/angular-mocks.js"
                 data-name="v1.2.16-build.53+sha.7a29436"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.53+sha.7a29436">v1.2.16-build.53+sha.7a29436</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.52+sha.fbab287/angular-mocks.js"
                 data-name="v1.2.16-build.52+sha.fbab287"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.52+sha.fbab287">v1.2.16-build.52+sha.fbab287</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.51+sha.69e5c36/angular-mocks.js"
                 data-name="v1.2.16-build.51+sha.69e5c36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.51+sha.69e5c36">v1.2.16-build.51+sha.69e5c36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.50+sha.c0ccbb7/angular-mocks.js"
                 data-name="v1.2.16-build.50+sha.c0ccbb7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.50+sha.c0ccbb7">v1.2.16-build.50+sha.c0ccbb7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.49+sha.2590030/angular-mocks.js"
                 data-name="v1.2.16-build.49+sha.2590030"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.49+sha.2590030">v1.2.16-build.49+sha.2590030</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.48+sha.fedc419/angular-mocks.js"
                 data-name="v1.2.16-build.48+sha.fedc419"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.48+sha.fedc419">v1.2.16-build.48+sha.fedc419</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.47+sha.0e5106e/angular-mocks.js"
                 data-name="v1.2.16-build.47+sha.0e5106e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.47+sha.0e5106e">v1.2.16-build.47+sha.0e5106e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.46+sha.9091b77/angular-mocks.js"
                 data-name="v1.2.16-build.46+sha.9091b77"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.46+sha.9091b77">v1.2.16-build.46+sha.9091b77</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.43+sha.95bd046/angular-mocks.js"
                 data-name="v1.2.16-build.43+sha.95bd046"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.43+sha.95bd046">v1.2.16-build.43+sha.95bd046</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.42+sha.5ced7b2/angular-mocks.js"
                 data-name="v1.2.16-build.42+sha.5ced7b2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.42+sha.5ced7b2">v1.2.16-build.42+sha.5ced7b2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.41+sha.114cf9e/angular-mocks.js"
                 data-name="v1.2.16-build.41+sha.114cf9e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.41+sha.114cf9e">v1.2.16-build.41+sha.114cf9e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.40+sha.1b61b73/angular-mocks.js"
                 data-name="v1.2.16-build.40+sha.1b61b73"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.40+sha.1b61b73">v1.2.16-build.40+sha.1b61b73</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.39+sha.77edce5/angular-mocks.js"
                 data-name="v1.2.16-build.39+sha.77edce5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.39+sha.77edce5">v1.2.16-build.39+sha.77edce5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.38+sha.2acc910/angular-mocks.js"
                 data-name="v1.2.16-build.38+sha.2acc910"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.38+sha.2acc910">v1.2.16-build.38+sha.2acc910</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.37+sha.5b1c899/angular-mocks.js"
                 data-name="v1.2.16-build.37+sha.5b1c899"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.37+sha.5b1c899">v1.2.16-build.37+sha.5b1c899</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.36+sha.b0bcf18/angular-mocks.js"
                 data-name="v1.2.16-build.36+sha.b0bcf18"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.36+sha.b0bcf18">v1.2.16-build.36+sha.b0bcf18</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.35+sha.764a3be/angular-mocks.js"
                 data-name="v1.2.16-build.35+sha.764a3be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.35+sha.764a3be">v1.2.16-build.35+sha.764a3be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.34+sha.561ddc9/angular-mocks.js"
                 data-name="v1.2.16-build.34+sha.561ddc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.34+sha.561ddc9">v1.2.16-build.34+sha.561ddc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.33+sha.512ecf8/angular-mocks.js"
                 data-name="v1.2.16-build.33+sha.512ecf8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.33+sha.512ecf8">v1.2.16-build.33+sha.512ecf8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.32+sha.6636f1d/angular-mocks.js"
                 data-name="v1.2.16-build.32+sha.6636f1d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.32+sha.6636f1d">v1.2.16-build.32+sha.6636f1d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.31+sha.7cccb8b/angular-mocks.js"
                 data-name="v1.2.16-build.31+sha.7cccb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.31+sha.7cccb8b">v1.2.16-build.31+sha.7cccb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.30+sha.7cccb8b/angular-mocks.js"
                 data-name="v1.2.16-build.30+sha.7cccb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.30+sha.7cccb8b">v1.2.16-build.30+sha.7cccb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.29+sha.a275d53/angular-mocks.js"
                 data-name="v1.2.16-build.29+sha.a275d53"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.29+sha.a275d53">v1.2.16-build.29+sha.a275d53</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.28+sha.b2363e3/angular-mocks.js"
                 data-name="v1.2.16-build.28+sha.b2363e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.28+sha.b2363e3">v1.2.16-build.28+sha.b2363e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.16-build.27+sha.edfca4c/angular-mocks.js"
                 data-name="v1.2.16-build.27+sha.edfca4c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.16-build.27+sha.edfca4c">v1.2.16-build.27+sha.edfca4c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2399+sha.ca4ddfa/angular-mocks.js"
                 data-name="v1.2.15-build.2399+sha.ca4ddfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2399+sha.ca4ddfa">v1.2.15-build.2399+sha.ca4ddfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2398+sha.4bab3d8/angular-mocks.js"
                 data-name="v1.2.15-build.2398+sha.4bab3d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2398+sha.4bab3d8">v1.2.15-build.2398+sha.4bab3d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2397+sha.9c353b4/angular-mocks.js"
                 data-name="v1.2.15-build.2397+sha.9c353b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2397+sha.9c353b4">v1.2.15-build.2397+sha.9c353b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2396+sha.21243d6/angular-mocks.js"
                 data-name="v1.2.15-build.2396+sha.21243d6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2396+sha.21243d6">v1.2.15-build.2396+sha.21243d6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2395+sha.ad309b1/angular-mocks.js"
                 data-name="v1.2.15-build.2395+sha.ad309b1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2395+sha.ad309b1">v1.2.15-build.2395+sha.ad309b1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2394+sha.7a75356/angular-mocks.js"
                 data-name="v1.2.15-build.2394+sha.7a75356"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2394+sha.7a75356">v1.2.15-build.2394+sha.7a75356</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2393+sha.dc57fe9/angular-mocks.js"
                 data-name="v1.2.15-build.2393+sha.dc57fe9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2393+sha.dc57fe9">v1.2.15-build.2393+sha.dc57fe9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2392+sha.dc57fe9/angular-mocks.js"
                 data-name="v1.2.15-build.2392+sha.dc57fe9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2392+sha.dc57fe9">v1.2.15-build.2392+sha.dc57fe9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2391+sha.53ec5e1/angular-mocks.js"
                 data-name="v1.2.15-build.2391+sha.53ec5e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2391+sha.53ec5e1">v1.2.15-build.2391+sha.53ec5e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2390+sha.235731d/angular-mocks.js"
                 data-name="v1.2.15-build.2390+sha.235731d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2390+sha.235731d">v1.2.15-build.2390+sha.235731d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2389+sha.c5f2f58/angular-mocks.js"
                 data-name="v1.2.15-build.2389+sha.c5f2f58"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2389+sha.c5f2f58">v1.2.15-build.2389+sha.c5f2f58</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2388+sha.186a68f/angular-mocks.js"
                 data-name="v1.2.15-build.2388+sha.186a68f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2388+sha.186a68f">v1.2.15-build.2388+sha.186a68f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2387+sha.46bd6dc/angular-mocks.js"
                 data-name="v1.2.15-build.2387+sha.46bd6dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2387+sha.46bd6dc">v1.2.15-build.2387+sha.46bd6dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2386+sha.80451f5/angular-mocks.js"
                 data-name="v1.2.15-build.2386+sha.80451f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2386+sha.80451f5">v1.2.15-build.2386+sha.80451f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2385+sha.0609453/angular-mocks.js"
                 data-name="v1.2.15-build.2385+sha.0609453"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2385+sha.0609453">v1.2.15-build.2385+sha.0609453</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2384+sha.7682e57/angular-mocks.js"
                 data-name="v1.2.15-build.2384+sha.7682e57"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2384+sha.7682e57">v1.2.15-build.2384+sha.7682e57</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2378+sha.9335378/angular-mocks.js"
                 data-name="v1.2.15-build.2378+sha.9335378"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2378+sha.9335378">v1.2.15-build.2378+sha.9335378</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2377+sha.de2ecb8/angular-mocks.js"
                 data-name="v1.2.15-build.2377+sha.de2ecb8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2377+sha.de2ecb8">v1.2.15-build.2377+sha.de2ecb8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2376+sha.66fdc03/angular-mocks.js"
                 data-name="v1.2.15-build.2376+sha.66fdc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2376+sha.66fdc03">v1.2.15-build.2376+sha.66fdc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2375+sha.66fdc03/angular-mocks.js"
                 data-name="v1.2.15-build.2375+sha.66fdc03"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2375+sha.66fdc03">v1.2.15-build.2375+sha.66fdc03</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2374+sha.8e2e9ad/angular-mocks.js"
                 data-name="v1.2.15-build.2374+sha.8e2e9ad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2374+sha.8e2e9ad">v1.2.15-build.2374+sha.8e2e9ad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2373+sha.7d60497/angular-mocks.js"
                 data-name="v1.2.15-build.2373+sha.7d60497"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2373+sha.7d60497">v1.2.15-build.2373+sha.7d60497</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2372+sha.02075dc/angular-mocks.js"
                 data-name="v1.2.15-build.2372+sha.02075dc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2372+sha.02075dc">v1.2.15-build.2372+sha.02075dc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2371+sha.7c73bc9/angular-mocks.js"
                 data-name="v1.2.15-build.2371+sha.7c73bc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2371+sha.7c73bc9">v1.2.15-build.2371+sha.7c73bc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2370+sha.2036fb1/angular-mocks.js"
                 data-name="v1.2.15-build.2370+sha.2036fb1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2370+sha.2036fb1">v1.2.15-build.2370+sha.2036fb1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2369+sha.d07101d/angular-mocks.js"
                 data-name="v1.2.15-build.2369+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2369+sha.d07101d">v1.2.15-build.2369+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2368+sha.d07101d/angular-mocks.js"
                 data-name="v1.2.15-build.2368+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2368+sha.d07101d">v1.2.15-build.2368+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2365+sha.d07101d/angular-mocks.js"
                 data-name="v1.2.15-build.2365+sha.d07101d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2365+sha.d07101d">v1.2.15-build.2365+sha.d07101d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2364+sha.7c34e1f/angular-mocks.js"
                 data-name="v1.2.15-build.2364+sha.7c34e1f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2364+sha.7c34e1f">v1.2.15-build.2364+sha.7c34e1f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2363+sha.bf82c8a/angular-mocks.js"
                 data-name="v1.2.15-build.2363+sha.bf82c8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2363+sha.bf82c8a">v1.2.15-build.2363+sha.bf82c8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2362+sha.d5f2084/angular-mocks.js"
                 data-name="v1.2.15-build.2362+sha.d5f2084"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2362+sha.d5f2084">v1.2.15-build.2362+sha.d5f2084</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2361+sha.9bffccd/angular-mocks.js"
                 data-name="v1.2.15-build.2361+sha.9bffccd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2361+sha.9bffccd">v1.2.15-build.2361+sha.9bffccd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2360+sha.6b18a56/angular-mocks.js"
                 data-name="v1.2.15-build.2360+sha.6b18a56"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2360+sha.6b18a56">v1.2.15-build.2360+sha.6b18a56</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2359+sha.27b7fa3/angular-mocks.js"
                 data-name="v1.2.15-build.2359+sha.27b7fa3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2359+sha.27b7fa3">v1.2.15-build.2359+sha.27b7fa3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2358+sha.d7ecab7/angular-mocks.js"
                 data-name="v1.2.15-build.2358+sha.d7ecab7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2358+sha.d7ecab7">v1.2.15-build.2358+sha.d7ecab7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.2357+sha.2616907/angular-mocks.js"
                 data-name="v1.2.15-build.2357+sha.2616907"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.2357+sha.2616907">v1.2.15-build.2357+sha.2616907</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.26+sha.a9b5a10/angular-mocks.js"
                 data-name="v1.2.15-build.26+sha.a9b5a10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.26+sha.a9b5a10">v1.2.15-build.26+sha.a9b5a10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.25+sha.ad128e0/angular-mocks.js"
                 data-name="v1.2.15-build.25+sha.ad128e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.25+sha.ad128e0">v1.2.15-build.25+sha.ad128e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.24+sha.dc5ada4/angular-mocks.js"
                 data-name="v1.2.15-build.24+sha.dc5ada4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.24+sha.dc5ada4">v1.2.15-build.24+sha.dc5ada4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.23+sha.86ab885/angular-mocks.js"
                 data-name="v1.2.15-build.23+sha.86ab885"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.23+sha.86ab885">v1.2.15-build.23+sha.86ab885</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.22+sha.320f6d1/angular-mocks.js"
                 data-name="v1.2.15-build.22+sha.320f6d1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.22+sha.320f6d1">v1.2.15-build.22+sha.320f6d1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.21+sha.83f37d7/angular-mocks.js"
                 data-name="v1.2.15-build.21+sha.83f37d7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.21+sha.83f37d7">v1.2.15-build.21+sha.83f37d7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15-build.20+sha.d4ac254/angular-mocks.js"
                 data-name="v1.2.15-build.20+sha.d4ac254"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15-build.20+sha.d4ac254">v1.2.15-build.20+sha.d4ac254</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.15/angular-mocks.js"
                 data-name="v1.2.15"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.15">v1.2.15</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2348+sha.0d034a9/angular-mocks.js"
                 data-name="v1.2.14-build.2348+sha.0d034a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2348+sha.0d034a9">v1.2.14-build.2348+sha.0d034a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2347+sha.0c8a88b/angular-mocks.js"
                 data-name="v1.2.14-build.2347+sha.0c8a88b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2347+sha.0c8a88b">v1.2.14-build.2347+sha.0c8a88b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2346+sha.6b5baad/angular-mocks.js"
                 data-name="v1.2.14-build.2346+sha.6b5baad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2346+sha.6b5baad">v1.2.14-build.2346+sha.6b5baad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2345+sha.9aab5bf/angular-mocks.js"
                 data-name="v1.2.14-build.2345+sha.9aab5bf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2345+sha.9aab5bf">v1.2.14-build.2345+sha.9aab5bf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2344+sha.18c41af/angular-mocks.js"
                 data-name="v1.2.14-build.2344+sha.18c41af"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2344+sha.18c41af">v1.2.14-build.2344+sha.18c41af</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2343+sha.3344396/angular-mocks.js"
                 data-name="v1.2.14-build.2343+sha.3344396"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2343+sha.3344396">v1.2.14-build.2343+sha.3344396</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2342+sha.8794a17/angular-mocks.js"
                 data-name="v1.2.14-build.2342+sha.8794a17"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2342+sha.8794a17">v1.2.14-build.2342+sha.8794a17</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2341+sha.41e648a/angular-mocks.js"
                 data-name="v1.2.14-build.2341+sha.41e648a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2341+sha.41e648a">v1.2.14-build.2341+sha.41e648a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2340+sha.5d9d6a5/angular-mocks.js"
                 data-name="v1.2.14-build.2340+sha.5d9d6a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2340+sha.5d9d6a5">v1.2.14-build.2340+sha.5d9d6a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2339+sha.4e73c80/angular-mocks.js"
                 data-name="v1.2.14-build.2339+sha.4e73c80"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2339+sha.4e73c80">v1.2.14-build.2339+sha.4e73c80</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2338+sha.27873ac/angular-mocks.js"
                 data-name="v1.2.14-build.2338+sha.27873ac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2338+sha.27873ac">v1.2.14-build.2338+sha.27873ac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2337+sha.214c65d/angular-mocks.js"
                 data-name="v1.2.14-build.2337+sha.214c65d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2337+sha.214c65d">v1.2.14-build.2337+sha.214c65d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2336+sha.b3750e5/angular-mocks.js"
                 data-name="v1.2.14-build.2336+sha.b3750e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2336+sha.b3750e5">v1.2.14-build.2336+sha.b3750e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2335+sha.4aac37e/angular-mocks.js"
                 data-name="v1.2.14-build.2335+sha.4aac37e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2335+sha.4aac37e">v1.2.14-build.2335+sha.4aac37e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2334+sha.fd09586/angular-mocks.js"
                 data-name="v1.2.14-build.2334+sha.fd09586"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2334+sha.fd09586">v1.2.14-build.2334+sha.fd09586</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2333+sha.713f975/angular-mocks.js"
                 data-name="v1.2.14-build.2333+sha.713f975"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2333+sha.713f975">v1.2.14-build.2333+sha.713f975</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2332+sha.794e5e6/angular-mocks.js"
                 data-name="v1.2.14-build.2332+sha.794e5e6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2332+sha.794e5e6">v1.2.14-build.2332+sha.794e5e6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2331+sha.f4f1f43/angular-mocks.js"
                 data-name="v1.2.14-build.2331+sha.f4f1f43"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2331+sha.f4f1f43">v1.2.14-build.2331+sha.f4f1f43</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2330+sha.e71e7b6/angular-mocks.js"
                 data-name="v1.2.14-build.2330+sha.e71e7b6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2330+sha.e71e7b6">v1.2.14-build.2330+sha.e71e7b6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2329+sha.c914cd9/angular-mocks.js"
                 data-name="v1.2.14-build.2329+sha.c914cd9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2329+sha.c914cd9">v1.2.14-build.2329+sha.c914cd9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2328+sha.e988199/angular-mocks.js"
                 data-name="v1.2.14-build.2328+sha.e988199"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2328+sha.e988199">v1.2.14-build.2328+sha.e988199</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2327+sha.c9245cf/angular-mocks.js"
                 data-name="v1.2.14-build.2327+sha.c9245cf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2327+sha.c9245cf">v1.2.14-build.2327+sha.c9245cf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2326+sha.332e935/angular-mocks.js"
                 data-name="v1.2.14-build.2326+sha.332e935"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2326+sha.332e935">v1.2.14-build.2326+sha.332e935</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2325+sha.3d6dff4/angular-mocks.js"
                 data-name="v1.2.14-build.2325+sha.3d6dff4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2325+sha.3d6dff4">v1.2.14-build.2325+sha.3d6dff4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2324+sha.6b049c7/angular-mocks.js"
                 data-name="v1.2.14-build.2324+sha.6b049c7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2324+sha.6b049c7">v1.2.14-build.2324+sha.6b049c7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2323+sha.c99dd22/angular-mocks.js"
                 data-name="v1.2.14-build.2323+sha.c99dd22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2323+sha.c99dd22">v1.2.14-build.2323+sha.c99dd22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2322+sha.1b1413a/angular-mocks.js"
                 data-name="v1.2.14-build.2322+sha.1b1413a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2322+sha.1b1413a">v1.2.14-build.2322+sha.1b1413a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2320+sha.1b1413a/angular-mocks.js"
                 data-name="v1.2.14-build.2320+sha.1b1413a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2320+sha.1b1413a">v1.2.14-build.2320+sha.1b1413a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2319+sha.4c4537e/angular-mocks.js"
                 data-name="v1.2.14-build.2319+sha.4c4537e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2319+sha.4c4537e">v1.2.14-build.2319+sha.4c4537e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2318+sha.2cd87db/angular-mocks.js"
                 data-name="v1.2.14-build.2318+sha.2cd87db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2318+sha.2cd87db">v1.2.14-build.2318+sha.2cd87db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2317+sha.348a771/angular-mocks.js"
                 data-name="v1.2.14-build.2317+sha.348a771"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2317+sha.348a771">v1.2.14-build.2317+sha.348a771</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2316+sha.24fe163/angular-mocks.js"
                 data-name="v1.2.14-build.2316+sha.24fe163"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2316+sha.24fe163">v1.2.14-build.2316+sha.24fe163</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2315+sha.832be41/angular-mocks.js"
                 data-name="v1.2.14-build.2315+sha.832be41"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2315+sha.832be41">v1.2.14-build.2315+sha.832be41</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2314+sha.ffe5115/angular-mocks.js"
                 data-name="v1.2.14-build.2314+sha.ffe5115"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2314+sha.ffe5115">v1.2.14-build.2314+sha.ffe5115</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2313+sha.61b2515/angular-mocks.js"
                 data-name="v1.2.14-build.2313+sha.61b2515"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2313+sha.61b2515">v1.2.14-build.2313+sha.61b2515</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2312+sha.f296e2e/angular-mocks.js"
                 data-name="v1.2.14-build.2312+sha.f296e2e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2312+sha.f296e2e">v1.2.14-build.2312+sha.f296e2e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2311+sha.f4a121f/angular-mocks.js"
                 data-name="v1.2.14-build.2311+sha.f4a121f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2311+sha.f4a121f">v1.2.14-build.2311+sha.f4a121f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2307+sha.1293cc8/angular-mocks.js"
                 data-name="v1.2.14-build.2307+sha.1293cc8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2307+sha.1293cc8">v1.2.14-build.2307+sha.1293cc8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2306+sha.c2d447e/angular-mocks.js"
                 data-name="v1.2.14-build.2306+sha.c2d447e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2306+sha.c2d447e">v1.2.14-build.2306+sha.c2d447e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2305+sha.c8e03e3/angular-mocks.js"
                 data-name="v1.2.14-build.2305+sha.c8e03e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2305+sha.c8e03e3">v1.2.14-build.2305+sha.c8e03e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2304+sha.2f45133/angular-mocks.js"
                 data-name="v1.2.14-build.2304+sha.2f45133"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2304+sha.2f45133">v1.2.14-build.2304+sha.2f45133</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2303+sha.0c9abc3/angular-mocks.js"
                 data-name="v1.2.14-build.2303+sha.0c9abc3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2303+sha.0c9abc3">v1.2.14-build.2303+sha.0c9abc3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2302+sha.f827d64/angular-mocks.js"
                 data-name="v1.2.14-build.2302+sha.f827d64"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2302+sha.f827d64">v1.2.14-build.2302+sha.f827d64</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2301+sha.4d7e1ce/angular-mocks.js"
                 data-name="v1.2.14-build.2301+sha.4d7e1ce"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2301+sha.4d7e1ce">v1.2.14-build.2301+sha.4d7e1ce</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2300+sha.58b01fa/angular-mocks.js"
                 data-name="v1.2.14-build.2300+sha.58b01fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2300+sha.58b01fa">v1.2.14-build.2300+sha.58b01fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2299+sha.84ad0a0/angular-mocks.js"
                 data-name="v1.2.14-build.2299+sha.84ad0a0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2299+sha.84ad0a0">v1.2.14-build.2299+sha.84ad0a0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2298+sha.2a37690/angular-mocks.js"
                 data-name="v1.2.14-build.2298+sha.2a37690"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2298+sha.2a37690">v1.2.14-build.2298+sha.2a37690</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2297+sha.45304a9/angular-mocks.js"
                 data-name="v1.2.14-build.2297+sha.45304a9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2297+sha.45304a9">v1.2.14-build.2297+sha.45304a9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2296+sha.0478bb4/angular-mocks.js"
                 data-name="v1.2.14-build.2296+sha.0478bb4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2296+sha.0478bb4">v1.2.14-build.2296+sha.0478bb4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2295+sha.3193a3a/angular-mocks.js"
                 data-name="v1.2.14-build.2295+sha.3193a3a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2295+sha.3193a3a">v1.2.14-build.2295+sha.3193a3a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2294+sha.6082e2a/angular-mocks.js"
                 data-name="v1.2.14-build.2294+sha.6082e2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2294+sha.6082e2a">v1.2.14-build.2294+sha.6082e2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2293+sha.39bae62/angular-mocks.js"
                 data-name="v1.2.14-build.2293+sha.39bae62"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2293+sha.39bae62">v1.2.14-build.2293+sha.39bae62</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2292+sha.d7a73e4/angular-mocks.js"
                 data-name="v1.2.14-build.2292+sha.d7a73e4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2292+sha.d7a73e4">v1.2.14-build.2292+sha.d7a73e4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2291+sha.e6c35e1/angular-mocks.js"
                 data-name="v1.2.14-build.2291+sha.e6c35e1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2291+sha.e6c35e1">v1.2.14-build.2291+sha.e6c35e1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2290+sha.0b6ba9c/angular-mocks.js"
                 data-name="v1.2.14-build.2290+sha.0b6ba9c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2290+sha.0b6ba9c">v1.2.14-build.2290+sha.0b6ba9c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2289+sha.cc1f753/angular-mocks.js"
                 data-name="v1.2.14-build.2289+sha.cc1f753"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2289+sha.cc1f753">v1.2.14-build.2289+sha.cc1f753</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2288+sha.9ca685b/angular-mocks.js"
                 data-name="v1.2.14-build.2288+sha.9ca685b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2288+sha.9ca685b">v1.2.14-build.2288+sha.9ca685b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2287+sha.1b74e5e/angular-mocks.js"
                 data-name="v1.2.14-build.2287+sha.1b74e5e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2287+sha.1b74e5e">v1.2.14-build.2287+sha.1b74e5e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2286+sha.3fbc257/angular-mocks.js"
                 data-name="v1.2.14-build.2286+sha.3fbc257"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2286+sha.3fbc257">v1.2.14-build.2286+sha.3fbc257</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2285+sha.b488bbf/angular-mocks.js"
                 data-name="v1.2.14-build.2285+sha.b488bbf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2285+sha.b488bbf">v1.2.14-build.2285+sha.b488bbf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2284+sha.696928d/angular-mocks.js"
                 data-name="v1.2.14-build.2284+sha.696928d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2284+sha.696928d">v1.2.14-build.2284+sha.696928d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2283+sha.cbcfaa2/angular-mocks.js"
                 data-name="v1.2.14-build.2283+sha.cbcfaa2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2283+sha.cbcfaa2">v1.2.14-build.2283+sha.cbcfaa2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2282+sha.1523fc7/angular-mocks.js"
                 data-name="v1.2.14-build.2282+sha.1523fc7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2282+sha.1523fc7">v1.2.14-build.2282+sha.1523fc7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2281+sha.a3f7017/angular-mocks.js"
                 data-name="v1.2.14-build.2281+sha.a3f7017"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2281+sha.a3f7017">v1.2.14-build.2281+sha.a3f7017</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2280+sha.868a2c4/angular-mocks.js"
                 data-name="v1.2.14-build.2280+sha.868a2c4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2280+sha.868a2c4">v1.2.14-build.2280+sha.868a2c4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2278+sha.21dac2a/angular-mocks.js"
                 data-name="v1.2.14-build.2278+sha.21dac2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2278+sha.21dac2a">v1.2.14-build.2278+sha.21dac2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2277+sha.481508d/angular-mocks.js"
                 data-name="v1.2.14-build.2277+sha.481508d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2277+sha.481508d">v1.2.14-build.2277+sha.481508d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2276+sha.12e4d3a/angular-mocks.js"
                 data-name="v1.2.14-build.2276+sha.12e4d3a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2276+sha.12e4d3a">v1.2.14-build.2276+sha.12e4d3a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2275+sha.4f937bd/angular-mocks.js"
                 data-name="v1.2.14-build.2275+sha.4f937bd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2275+sha.4f937bd">v1.2.14-build.2275+sha.4f937bd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2273+sha.666137d/angular-mocks.js"
                 data-name="v1.2.14-build.2273+sha.666137d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2273+sha.666137d">v1.2.14-build.2273+sha.666137d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2272+sha.846ebb4/angular-mocks.js"
                 data-name="v1.2.14-build.2272+sha.846ebb4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2272+sha.846ebb4">v1.2.14-build.2272+sha.846ebb4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2271+sha.e23a6a3/angular-mocks.js"
                 data-name="v1.2.14-build.2271+sha.e23a6a3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2271+sha.e23a6a3">v1.2.14-build.2271+sha.e23a6a3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2270+sha.47ec6f5/angular-mocks.js"
                 data-name="v1.2.14-build.2270+sha.47ec6f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2270+sha.47ec6f5">v1.2.14-build.2270+sha.47ec6f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2269+sha.47ec6f5/angular-mocks.js"
                 data-name="v1.2.14-build.2269+sha.47ec6f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2269+sha.47ec6f5">v1.2.14-build.2269+sha.47ec6f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2268+sha.1fb47e0/angular-mocks.js"
                 data-name="v1.2.14-build.2268+sha.1fb47e0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2268+sha.1fb47e0">v1.2.14-build.2268+sha.1fb47e0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2267+sha.cceb455/angular-mocks.js"
                 data-name="v1.2.14-build.2267+sha.cceb455"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2267+sha.cceb455">v1.2.14-build.2267+sha.cceb455</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14-build.2266+sha.3018ff7/angular-mocks.js"
                 data-name="v1.2.14-build.2266+sha.3018ff7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14-build.2266+sha.3018ff7">v1.2.14-build.2266+sha.3018ff7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.14/angular-mocks.js"
                 data-name="v1.2.14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.14">v1.2.14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2265+sha.c086f83/angular-mocks.js"
                 data-name="v1.2.13-build.2265+sha.c086f83"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2265+sha.c086f83">v1.2.13-build.2265+sha.c086f83</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2263+sha.31c450b/angular-mocks.js"
                 data-name="v1.2.13-build.2263+sha.31c450b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2263+sha.31c450b">v1.2.13-build.2263+sha.31c450b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2262+sha.a9fcb0d/angular-mocks.js"
                 data-name="v1.2.13-build.2262+sha.a9fcb0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2262+sha.a9fcb0d">v1.2.13-build.2262+sha.a9fcb0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2261+sha.a3846ab/angular-mocks.js"
                 data-name="v1.2.13-build.2261+sha.a3846ab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2261+sha.a3846ab">v1.2.13-build.2261+sha.a3846ab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2260+sha.2b73027/angular-mocks.js"
                 data-name="v1.2.13-build.2260+sha.2b73027"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2260+sha.2b73027">v1.2.13-build.2260+sha.2b73027</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2259+sha.1079105/angular-mocks.js"
                 data-name="v1.2.13-build.2259+sha.1079105"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2259+sha.1079105">v1.2.13-build.2259+sha.1079105</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2258+sha.d119e36/angular-mocks.js"
                 data-name="v1.2.13-build.2258+sha.d119e36"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2258+sha.d119e36">v1.2.13-build.2258+sha.d119e36</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2257+sha.98b2f8e/angular-mocks.js"
                 data-name="v1.2.13-build.2257+sha.98b2f8e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2257+sha.98b2f8e">v1.2.13-build.2257+sha.98b2f8e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2256+sha.e7ab857/angular-mocks.js"
                 data-name="v1.2.13-build.2256+sha.e7ab857"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2256+sha.e7ab857">v1.2.13-build.2256+sha.e7ab857</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2255+sha.72894f0/angular-mocks.js"
                 data-name="v1.2.13-build.2255+sha.72894f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2255+sha.72894f0">v1.2.13-build.2255+sha.72894f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2254+sha.760f49d/angular-mocks.js"
                 data-name="v1.2.13-build.2254+sha.760f49d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2254+sha.760f49d">v1.2.13-build.2254+sha.760f49d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2253+sha.686b13b/angular-mocks.js"
                 data-name="v1.2.13-build.2253+sha.686b13b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2253+sha.686b13b">v1.2.13-build.2253+sha.686b13b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2252+sha.56cc7bc/angular-mocks.js"
                 data-name="v1.2.13-build.2252+sha.56cc7bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2252+sha.56cc7bc">v1.2.13-build.2252+sha.56cc7bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2251+sha.b4eed8a/angular-mocks.js"
                 data-name="v1.2.13-build.2251+sha.b4eed8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2251+sha.b4eed8a">v1.2.13-build.2251+sha.b4eed8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2250+sha.08793a6/angular-mocks.js"
                 data-name="v1.2.13-build.2250+sha.08793a6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2250+sha.08793a6">v1.2.13-build.2250+sha.08793a6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2249+sha.ef4bf8c/angular-mocks.js"
                 data-name="v1.2.13-build.2249+sha.ef4bf8c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2249+sha.ef4bf8c">v1.2.13-build.2249+sha.ef4bf8c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2248+sha.b6ab826/angular-mocks.js"
                 data-name="v1.2.13-build.2248+sha.b6ab826"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2248+sha.b6ab826">v1.2.13-build.2248+sha.b6ab826</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2247+sha.a686244/angular-mocks.js"
                 data-name="v1.2.13-build.2247+sha.a686244"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2247+sha.a686244">v1.2.13-build.2247+sha.a686244</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2246+sha.945fc1a/angular-mocks.js"
                 data-name="v1.2.13-build.2246+sha.945fc1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2246+sha.945fc1a">v1.2.13-build.2246+sha.945fc1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2245+sha.f99fe79/angular-mocks.js"
                 data-name="v1.2.13-build.2245+sha.f99fe79"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2245+sha.f99fe79">v1.2.13-build.2245+sha.f99fe79</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2244+sha.2dfbc08/angular-mocks.js"
                 data-name="v1.2.13-build.2244+sha.2dfbc08"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2244+sha.2dfbc08">v1.2.13-build.2244+sha.2dfbc08</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2243+sha.27613fd/angular-mocks.js"
                 data-name="v1.2.13-build.2243+sha.27613fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2243+sha.27613fd">v1.2.13-build.2243+sha.27613fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2242+sha.e645f7c/angular-mocks.js"
                 data-name="v1.2.13-build.2242+sha.e645f7c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2242+sha.e645f7c">v1.2.13-build.2242+sha.e645f7c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2241+sha.600e621/angular-mocks.js"
                 data-name="v1.2.13-build.2241+sha.600e621"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2241+sha.600e621">v1.2.13-build.2241+sha.600e621</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13-build.2240+sha.5218c7b/angular-mocks.js"
                 data-name="v1.2.13-build.2240+sha.5218c7b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13-build.2240+sha.5218c7b">v1.2.13-build.2240+sha.5218c7b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.13/angular-mocks.js"
                 data-name="v1.2.13"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.13">v1.2.13</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2237+sha.d5c7ef0/angular-mocks.js"
                 data-name="v1.2.12-build.2237+sha.d5c7ef0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2237+sha.d5c7ef0">v1.2.12-build.2237+sha.d5c7ef0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2236+sha.84fd3a1/angular-mocks.js"
                 data-name="v1.2.12-build.2236+sha.84fd3a1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2236+sha.84fd3a1">v1.2.12-build.2236+sha.84fd3a1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2235+sha.fcf4393/angular-mocks.js"
                 data-name="v1.2.12-build.2235+sha.fcf4393"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2235+sha.fcf4393">v1.2.12-build.2235+sha.fcf4393</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2233+sha.16301be/angular-mocks.js"
                 data-name="v1.2.12-build.2233+sha.16301be"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2233+sha.16301be">v1.2.12-build.2233+sha.16301be</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2232+sha.95be253/angular-mocks.js"
                 data-name="v1.2.12-build.2232+sha.95be253"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2232+sha.95be253">v1.2.12-build.2232+sha.95be253</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2230+sha.bf4b0db/angular-mocks.js"
                 data-name="v1.2.12-build.2230+sha.bf4b0db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2230+sha.bf4b0db">v1.2.12-build.2230+sha.bf4b0db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2229+sha.95d119e/angular-mocks.js"
                 data-name="v1.2.12-build.2229+sha.95d119e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2229+sha.95d119e">v1.2.12-build.2229+sha.95d119e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2226+sha.a8c1d9c/angular-mocks.js"
                 data-name="v1.2.12-build.2226+sha.a8c1d9c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2226+sha.a8c1d9c">v1.2.12-build.2226+sha.a8c1d9c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2225+sha.8829a2a/angular-mocks.js"
                 data-name="v1.2.12-build.2225+sha.8829a2a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2225+sha.8829a2a">v1.2.12-build.2225+sha.8829a2a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2223+sha.95522cc/angular-mocks.js"
                 data-name="v1.2.12-build.2223+sha.95522cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2223+sha.95522cc">v1.2.12-build.2223+sha.95522cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2222+sha.c5f69e3/angular-mocks.js"
                 data-name="v1.2.12-build.2222+sha.c5f69e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2222+sha.c5f69e3">v1.2.12-build.2222+sha.c5f69e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2219+sha.058842a/angular-mocks.js"
                 data-name="v1.2.12-build.2219+sha.058842a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2219+sha.058842a">v1.2.12-build.2219+sha.058842a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2217+sha.5850e61/angular-mocks.js"
                 data-name="v1.2.12-build.2217+sha.5850e61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2217+sha.5850e61">v1.2.12-build.2217+sha.5850e61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2216+sha.5850e61/angular-mocks.js"
                 data-name="v1.2.12-build.2216+sha.5850e61"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2216+sha.5850e61">v1.2.12-build.2216+sha.5850e61</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2215+sha.0da6cc9/angular-mocks.js"
                 data-name="v1.2.12-build.2215+sha.0da6cc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2215+sha.0da6cc9">v1.2.12-build.2215+sha.0da6cc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2214+sha.0da6cc9/angular-mocks.js"
                 data-name="v1.2.12-build.2214+sha.0da6cc9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2214+sha.0da6cc9">v1.2.12-build.2214+sha.0da6cc9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2213+sha.cc60ba1/angular-mocks.js"
                 data-name="v1.2.12-build.2213+sha.cc60ba1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2213+sha.cc60ba1">v1.2.12-build.2213+sha.cc60ba1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2212+sha.64d58a5/angular-mocks.js"
                 data-name="v1.2.12-build.2212+sha.64d58a5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2212+sha.64d58a5">v1.2.12-build.2212+sha.64d58a5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2211+sha.3bf4390/angular-mocks.js"
                 data-name="v1.2.12-build.2211+sha.3bf4390"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2211+sha.3bf4390">v1.2.12-build.2211+sha.3bf4390</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2210+sha.e7ac7aa/angular-mocks.js"
                 data-name="v1.2.12-build.2210+sha.e7ac7aa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2210+sha.e7ac7aa">v1.2.12-build.2210+sha.e7ac7aa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2209+sha.37781ed/angular-mocks.js"
                 data-name="v1.2.12-build.2209+sha.37781ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2209+sha.37781ed">v1.2.12-build.2209+sha.37781ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2208+sha.19ba651/angular-mocks.js"
                 data-name="v1.2.12-build.2208+sha.19ba651"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2208+sha.19ba651">v1.2.12-build.2208+sha.19ba651</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2207+sha.bc5ceee/angular-mocks.js"
                 data-name="v1.2.12-build.2207+sha.bc5ceee"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2207+sha.bc5ceee">v1.2.12-build.2207+sha.bc5ceee</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12-build.2206+sha.106af49/angular-mocks.js"
                 data-name="v1.2.12-build.2206+sha.106af49"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12-build.2206+sha.106af49">v1.2.12-build.2206+sha.106af49</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.12/angular-mocks.js"
                 data-name="v1.2.12"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.12">v1.2.12</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2205+sha.ce1f1f9/angular-mocks.js"
                 data-name="v1.2.11-build.2205+sha.ce1f1f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2205+sha.ce1f1f9">v1.2.11-build.2205+sha.ce1f1f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2204+sha.8205158/angular-mocks.js"
                 data-name="v1.2.11-build.2204+sha.8205158"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2204+sha.8205158">v1.2.11-build.2204+sha.8205158</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2203+sha.8205158/angular-mocks.js"
                 data-name="v1.2.11-build.2203+sha.8205158"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2203+sha.8205158">v1.2.11-build.2203+sha.8205158</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2202+sha.6609e3d/angular-mocks.js"
                 data-name="v1.2.11-build.2202+sha.6609e3d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2202+sha.6609e3d">v1.2.11-build.2202+sha.6609e3d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2200+sha.fd61e22/angular-mocks.js"
                 data-name="v1.2.11-build.2200+sha.fd61e22"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2200+sha.fd61e22">v1.2.11-build.2200+sha.fd61e22</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2199+sha.074b067/angular-mocks.js"
                 data-name="v1.2.11-build.2199+sha.074b067"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2199+sha.074b067">v1.2.11-build.2199+sha.074b067</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2198+sha.5ed721b/angular-mocks.js"
                 data-name="v1.2.11-build.2198+sha.5ed721b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2198+sha.5ed721b">v1.2.11-build.2198+sha.5ed721b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2197+sha.c22ab5d/angular-mocks.js"
                 data-name="v1.2.11-build.2197+sha.c22ab5d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2197+sha.c22ab5d">v1.2.11-build.2197+sha.c22ab5d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2196+sha.339a165/angular-mocks.js"
                 data-name="v1.2.11-build.2196+sha.339a165"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2196+sha.339a165">v1.2.11-build.2196+sha.339a165</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2195+sha.29432ff/angular-mocks.js"
                 data-name="v1.2.11-build.2195+sha.29432ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2195+sha.29432ff">v1.2.11-build.2195+sha.29432ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2194+sha.caed2df/angular-mocks.js"
                 data-name="v1.2.11-build.2194+sha.caed2df"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2194+sha.caed2df">v1.2.11-build.2194+sha.caed2df</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2193+sha.7f4edaf/angular-mocks.js"
                 data-name="v1.2.11-build.2193+sha.7f4edaf"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2193+sha.7f4edaf">v1.2.11-build.2193+sha.7f4edaf</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2192+sha.e2173f9/angular-mocks.js"
                 data-name="v1.2.11-build.2192+sha.e2173f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2192+sha.e2173f9">v1.2.11-build.2192+sha.e2173f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2191+sha.7a78aed/angular-mocks.js"
                 data-name="v1.2.11-build.2191+sha.7a78aed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2191+sha.7a78aed">v1.2.11-build.2191+sha.7a78aed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2190+sha.7aef2d5/angular-mocks.js"
                 data-name="v1.2.11-build.2190+sha.7aef2d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2190+sha.7aef2d5">v1.2.11-build.2190+sha.7aef2d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2189+sha.95f0bf9/angular-mocks.js"
                 data-name="v1.2.11-build.2189+sha.95f0bf9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2189+sha.95f0bf9">v1.2.11-build.2189+sha.95f0bf9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2188+sha.8a0be35/angular-mocks.js"
                 data-name="v1.2.11-build.2188+sha.8a0be35"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2188+sha.8a0be35">v1.2.11-build.2188+sha.8a0be35</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2187+sha.f54f0f9/angular-mocks.js"
                 data-name="v1.2.11-build.2187+sha.f54f0f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2187+sha.f54f0f9">v1.2.11-build.2187+sha.f54f0f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2186+sha.766b3d5/angular-mocks.js"
                 data-name="v1.2.11-build.2186+sha.766b3d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2186+sha.766b3d5">v1.2.11-build.2186+sha.766b3d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2185+sha.4f735b0/angular-mocks.js"
                 data-name="v1.2.11-build.2185+sha.4f735b0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2185+sha.4f735b0">v1.2.11-build.2185+sha.4f735b0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2184+sha.319dd1a/angular-mocks.js"
                 data-name="v1.2.11-build.2184+sha.319dd1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2184+sha.319dd1a">v1.2.11-build.2184+sha.319dd1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11-build.2182+sha.88a14b4/angular-mocks.js"
                 data-name="v1.2.11-build.2182+sha.88a14b4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11-build.2182+sha.88a14b4">v1.2.11-build.2182+sha.88a14b4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.11/angular-mocks.js"
                 data-name="v1.2.11"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.11">v1.2.11</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2181+sha.4f827f5/angular-mocks.js"
                 data-name="v1.2.10-build.2181+sha.4f827f5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2181+sha.4f827f5">v1.2.10-build.2181+sha.4f827f5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2180+sha.131410b/angular-mocks.js"
                 data-name="v1.2.10-build.2180+sha.131410b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2180+sha.131410b">v1.2.10-build.2180+sha.131410b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2179+sha.ca6b7d0/angular-mocks.js"
                 data-name="v1.2.10-build.2179+sha.ca6b7d0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2179+sha.ca6b7d0">v1.2.10-build.2179+sha.ca6b7d0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2178+sha.40dc806/angular-mocks.js"
                 data-name="v1.2.10-build.2178+sha.40dc806"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2178+sha.40dc806">v1.2.10-build.2178+sha.40dc806</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2177+sha.5e9835b/angular-mocks.js"
                 data-name="v1.2.10-build.2177+sha.5e9835b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2177+sha.5e9835b">v1.2.10-build.2177+sha.5e9835b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2176+sha.e020916/angular-mocks.js"
                 data-name="v1.2.10-build.2176+sha.e020916"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2176+sha.e020916">v1.2.10-build.2176+sha.e020916</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2175+sha.c3b5e16/angular-mocks.js"
                 data-name="v1.2.10-build.2175+sha.c3b5e16"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2175+sha.c3b5e16">v1.2.10-build.2175+sha.c3b5e16</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2174+sha.486bdf2/angular-mocks.js"
                 data-name="v1.2.10-build.2174+sha.486bdf2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2174+sha.486bdf2">v1.2.10-build.2174+sha.486bdf2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2173+sha.82213ef/angular-mocks.js"
                 data-name="v1.2.10-build.2173+sha.82213ef"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2173+sha.82213ef">v1.2.10-build.2173+sha.82213ef</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2172+sha.ec59be6/angular-mocks.js"
                 data-name="v1.2.10-build.2172+sha.ec59be6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2172+sha.ec59be6">v1.2.10-build.2172+sha.ec59be6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2171+sha.79e519f/angular-mocks.js"
                 data-name="v1.2.10-build.2171+sha.79e519f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2171+sha.79e519f">v1.2.10-build.2171+sha.79e519f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2170+sha.7cf5544/angular-mocks.js"
                 data-name="v1.2.10-build.2170+sha.7cf5544"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2170+sha.7cf5544">v1.2.10-build.2170+sha.7cf5544</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2169+sha.7cf5544/angular-mocks.js"
                 data-name="v1.2.10-build.2169+sha.7cf5544"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2169+sha.7cf5544">v1.2.10-build.2169+sha.7cf5544</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2168+sha.310f129/angular-mocks.js"
                 data-name="v1.2.10-build.2168+sha.310f129"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2168+sha.310f129">v1.2.10-build.2168+sha.310f129</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2167+sha.6d525f0/angular-mocks.js"
                 data-name="v1.2.10-build.2167+sha.6d525f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2167+sha.6d525f0">v1.2.10-build.2167+sha.6d525f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2166+sha.5b9ff6c/angular-mocks.js"
                 data-name="v1.2.10-build.2166+sha.5b9ff6c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2166+sha.5b9ff6c">v1.2.10-build.2166+sha.5b9ff6c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2165+sha.2068d76/angular-mocks.js"
                 data-name="v1.2.10-build.2165+sha.2068d76"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2165+sha.2068d76">v1.2.10-build.2165+sha.2068d76</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2164+sha.8b395ff/angular-mocks.js"
                 data-name="v1.2.10-build.2164+sha.8b395ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2164+sha.8b395ff">v1.2.10-build.2164+sha.8b395ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2163+sha.6c9131e/angular-mocks.js"
                 data-name="v1.2.10-build.2163+sha.6c9131e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2163+sha.6c9131e">v1.2.10-build.2163+sha.6c9131e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2162+sha.99c5027/angular-mocks.js"
                 data-name="v1.2.10-build.2162+sha.99c5027"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2162+sha.99c5027">v1.2.10-build.2162+sha.99c5027</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2161+sha.90e60d2/angular-mocks.js"
                 data-name="v1.2.10-build.2161+sha.90e60d2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2161+sha.90e60d2">v1.2.10-build.2161+sha.90e60d2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2160+sha.928d000/angular-mocks.js"
                 data-name="v1.2.10-build.2160+sha.928d000"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2160+sha.928d000">v1.2.10-build.2160+sha.928d000</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2159+sha.190c4f9/angular-mocks.js"
                 data-name="v1.2.10-build.2159+sha.190c4f9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2159+sha.190c4f9">v1.2.10-build.2159+sha.190c4f9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2158+sha.42ec95e/angular-mocks.js"
                 data-name="v1.2.10-build.2158+sha.42ec95e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2158+sha.42ec95e">v1.2.10-build.2158+sha.42ec95e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2157+sha.42ec95e/angular-mocks.js"
                 data-name="v1.2.10-build.2157+sha.42ec95e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2157+sha.42ec95e">v1.2.10-build.2157+sha.42ec95e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2156+sha.1028cfa/angular-mocks.js"
                 data-name="v1.2.10-build.2156+sha.1028cfa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2156+sha.1028cfa">v1.2.10-build.2156+sha.1028cfa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2155+sha.756c52d/angular-mocks.js"
                 data-name="v1.2.10-build.2155+sha.756c52d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2155+sha.756c52d">v1.2.10-build.2155+sha.756c52d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2154+sha.c3e1a41/angular-mocks.js"
                 data-name="v1.2.10-build.2154+sha.c3e1a41"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2154+sha.c3e1a41">v1.2.10-build.2154+sha.c3e1a41</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2153+sha.8dd4f14/angular-mocks.js"
                 data-name="v1.2.10-build.2153+sha.8dd4f14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2153+sha.8dd4f14">v1.2.10-build.2153+sha.8dd4f14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2152+sha.7ba30fd/angular-mocks.js"
                 data-name="v1.2.10-build.2152+sha.7ba30fd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2152+sha.7ba30fd">v1.2.10-build.2152+sha.7ba30fd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2151+sha.5adea0b/angular-mocks.js"
                 data-name="v1.2.10-build.2151+sha.5adea0b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2151+sha.5adea0b">v1.2.10-build.2151+sha.5adea0b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2150+sha.2262ca6/angular-mocks.js"
                 data-name="v1.2.10-build.2150+sha.2262ca6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2150+sha.2262ca6">v1.2.10-build.2150+sha.2262ca6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2149+sha.cd74f74/angular-mocks.js"
                 data-name="v1.2.10-build.2149+sha.cd74f74"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2149+sha.cd74f74">v1.2.10-build.2149+sha.cd74f74</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2148+sha.fced1c0/angular-mocks.js"
                 data-name="v1.2.10-build.2148+sha.fced1c0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2148+sha.fced1c0">v1.2.10-build.2148+sha.fced1c0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2147+sha.1cdcddb/angular-mocks.js"
                 data-name="v1.2.10-build.2147+sha.1cdcddb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2147+sha.1cdcddb">v1.2.10-build.2147+sha.1cdcddb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2146+sha.0e4d7ca/angular-mocks.js"
                 data-name="v1.2.10-build.2146+sha.0e4d7ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2146+sha.0e4d7ca">v1.2.10-build.2146+sha.0e4d7ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2145+sha.6a9ccac/angular-mocks.js"
                 data-name="v1.2.10-build.2145+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2145+sha.6a9ccac">v1.2.10-build.2145+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2144+sha.6a9ccac/angular-mocks.js"
                 data-name="v1.2.10-build.2144+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2144+sha.6a9ccac">v1.2.10-build.2144+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2143+sha.6a9ccac/angular-mocks.js"
                 data-name="v1.2.10-build.2143+sha.6a9ccac"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2143+sha.6a9ccac">v1.2.10-build.2143+sha.6a9ccac</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2142+sha.e591ddc/angular-mocks.js"
                 data-name="v1.2.10-build.2142+sha.e591ddc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2142+sha.e591ddc">v1.2.10-build.2142+sha.e591ddc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2141+sha.cd0af8a/angular-mocks.js"
                 data-name="v1.2.10-build.2141+sha.cd0af8a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2141+sha.cd0af8a">v1.2.10-build.2141+sha.cd0af8a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2140+sha.51a7f9d/angular-mocks.js"
                 data-name="v1.2.10-build.2140+sha.51a7f9d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2140+sha.51a7f9d">v1.2.10-build.2140+sha.51a7f9d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2139+sha.61eb426/angular-mocks.js"
                 data-name="v1.2.10-build.2139+sha.61eb426"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2139+sha.61eb426">v1.2.10-build.2139+sha.61eb426</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10-build.2136+sha.8ea8da4/angular-mocks.js"
                 data-name="v1.2.10-build.2136+sha.8ea8da4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10-build.2136+sha.8ea8da4">v1.2.10-build.2136+sha.8ea8da4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.10/angular-mocks.js"
                 data-name="v1.2.10"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.10">v1.2.10</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2134+sha.1413328/angular-mocks.js"
                 data-name="v1.2.9-build.2134+sha.1413328"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2134+sha.1413328">v1.2.9-build.2134+sha.1413328</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2133+sha.dde1b29/angular-mocks.js"
                 data-name="v1.2.9-build.2133+sha.dde1b29"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2133+sha.dde1b29">v1.2.9-build.2133+sha.dde1b29</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2130+sha.02a4582/angular-mocks.js"
                 data-name="v1.2.9-build.2130+sha.02a4582"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2130+sha.02a4582">v1.2.9-build.2130+sha.02a4582</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2129+sha.e324c14/angular-mocks.js"
                 data-name="v1.2.9-build.2129+sha.e324c14"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2129+sha.e324c14">v1.2.9-build.2129+sha.e324c14</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2128+sha.e1cfb19/angular-mocks.js"
                 data-name="v1.2.9-build.2128+sha.e1cfb19"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2128+sha.e1cfb19">v1.2.9-build.2128+sha.e1cfb19</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2127+sha.2a35863/angular-mocks.js"
                 data-name="v1.2.9-build.2127+sha.2a35863"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2127+sha.2a35863">v1.2.9-build.2127+sha.2a35863</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2126+sha.834d316/angular-mocks.js"
                 data-name="v1.2.9-build.2126+sha.834d316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2126+sha.834d316">v1.2.9-build.2126+sha.834d316</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2125+sha.b3acdde/angular-mocks.js"
                 data-name="v1.2.9-build.2125+sha.b3acdde"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2125+sha.b3acdde">v1.2.9-build.2125+sha.b3acdde</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2124+sha.3085987/angular-mocks.js"
                 data-name="v1.2.9-build.2124+sha.3085987"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2124+sha.3085987">v1.2.9-build.2124+sha.3085987</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2123+sha.2cd09c9/angular-mocks.js"
                 data-name="v1.2.9-build.2123+sha.2cd09c9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2123+sha.2cd09c9">v1.2.9-build.2123+sha.2cd09c9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2122+sha.34fee06/angular-mocks.js"
                 data-name="v1.2.9-build.2122+sha.34fee06"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2122+sha.34fee06">v1.2.9-build.2122+sha.34fee06</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2121+sha.c7a46d4/angular-mocks.js"
                 data-name="v1.2.9-build.2121+sha.c7a46d4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2121+sha.c7a46d4">v1.2.9-build.2121+sha.c7a46d4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2119+sha.c3ab915/angular-mocks.js"
                 data-name="v1.2.9-build.2119+sha.c3ab915"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2119+sha.c3ab915">v1.2.9-build.2119+sha.c3ab915</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2118+sha.f4a4f42/angular-mocks.js"
                 data-name="v1.2.9-build.2118+sha.f4a4f42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2118+sha.f4a4f42">v1.2.9-build.2118+sha.f4a4f42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2117+sha.b2c84cc/angular-mocks.js"
                 data-name="v1.2.9-build.2117+sha.b2c84cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2117+sha.b2c84cc">v1.2.9-build.2117+sha.b2c84cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2116+sha.cde840f/angular-mocks.js"
                 data-name="v1.2.9-build.2116+sha.cde840f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2116+sha.cde840f">v1.2.9-build.2116+sha.cde840f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2115+sha.63150d8/angular-mocks.js"
                 data-name="v1.2.9-build.2115+sha.63150d8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2115+sha.63150d8">v1.2.9-build.2115+sha.63150d8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2114+sha.f9656da/angular-mocks.js"
                 data-name="v1.2.9-build.2114+sha.f9656da"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2114+sha.f9656da">v1.2.9-build.2114+sha.f9656da</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2113+sha.a0d759c/angular-mocks.js"
                 data-name="v1.2.9-build.2113+sha.a0d759c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2113+sha.a0d759c">v1.2.9-build.2113+sha.a0d759c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2112+sha.0d421f0/angular-mocks.js"
                 data-name="v1.2.9-build.2112+sha.0d421f0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2112+sha.0d421f0">v1.2.9-build.2112+sha.0d421f0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9-build.2111+sha.5f937e5/angular-mocks.js"
                 data-name="v1.2.9-build.2111+sha.5f937e5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9-build.2111+sha.5f937e5">v1.2.9-build.2111+sha.5f937e5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.9/angular-mocks.js"
                 data-name="v1.2.9"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.9">v1.2.9</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2110+sha.ece7854/angular-mocks.js"
                 data-name="v1.2.8-build.2110+sha.ece7854"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2110+sha.ece7854">v1.2.8-build.2110+sha.ece7854</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2109+sha.8ace807/angular-mocks.js"
                 data-name="v1.2.8-build.2109+sha.8ace807"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2109+sha.8ace807">v1.2.8-build.2109+sha.8ace807</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2108+sha.a9cccbe/angular-mocks.js"
                 data-name="v1.2.8-build.2108+sha.a9cccbe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2108+sha.a9cccbe">v1.2.8-build.2108+sha.a9cccbe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2107+sha.36c9e42/angular-mocks.js"
                 data-name="v1.2.8-build.2107+sha.36c9e42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2107+sha.36c9e42">v1.2.8-build.2107+sha.36c9e42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2106+sha.9f566db/angular-mocks.js"
                 data-name="v1.2.8-build.2106+sha.9f566db"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2106+sha.9f566db">v1.2.8-build.2106+sha.9f566db</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2105+sha.c77b2bc/angular-mocks.js"
                 data-name="v1.2.8-build.2105+sha.c77b2bc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2105+sha.c77b2bc">v1.2.8-build.2105+sha.c77b2bc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2104+sha.5a4145f/angular-mocks.js"
                 data-name="v1.2.8-build.2104+sha.5a4145f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2104+sha.5a4145f">v1.2.8-build.2104+sha.5a4145f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2102+sha.5a9cb8b/angular-mocks.js"
                 data-name="v1.2.8-build.2102+sha.5a9cb8b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2102+sha.5a9cb8b">v1.2.8-build.2102+sha.5a9cb8b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2101+sha.69452fa/angular-mocks.js"
                 data-name="v1.2.8-build.2101+sha.69452fa"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2101+sha.69452fa">v1.2.8-build.2101+sha.69452fa</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2100+sha.1d2a388/angular-mocks.js"
                 data-name="v1.2.8-build.2100+sha.1d2a388"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2100+sha.1d2a388">v1.2.8-build.2100+sha.1d2a388</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2099+sha.ac05276/angular-mocks.js"
                 data-name="v1.2.8-build.2099+sha.ac05276"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2099+sha.ac05276">v1.2.8-build.2099+sha.ac05276</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2098+sha.cb9c0f2/angular-mocks.js"
                 data-name="v1.2.8-build.2098+sha.cb9c0f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2098+sha.cb9c0f2">v1.2.8-build.2098+sha.cb9c0f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2097+sha.b1d676b/angular-mocks.js"
                 data-name="v1.2.8-build.2097+sha.b1d676b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2097+sha.b1d676b">v1.2.8-build.2097+sha.b1d676b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2096+sha.9ddef84/angular-mocks.js"
                 data-name="v1.2.8-build.2096+sha.9ddef84"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2096+sha.9ddef84">v1.2.8-build.2096+sha.9ddef84</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2095+sha.28fc80b/angular-mocks.js"
                 data-name="v1.2.8-build.2095+sha.28fc80b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2095+sha.28fc80b">v1.2.8-build.2095+sha.28fc80b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2094+sha.b6c42d5/angular-mocks.js"
                 data-name="v1.2.8-build.2094+sha.b6c42d5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2094+sha.b6c42d5">v1.2.8-build.2094+sha.b6c42d5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2093+sha.1c045f1/angular-mocks.js"
                 data-name="v1.2.8-build.2093+sha.1c045f1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2093+sha.1c045f1">v1.2.8-build.2093+sha.1c045f1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2092+sha.95e1b2d/angular-mocks.js"
                 data-name="v1.2.8-build.2092+sha.95e1b2d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2092+sha.95e1b2d">v1.2.8-build.2092+sha.95e1b2d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2091+sha.75345e3/angular-mocks.js"
                 data-name="v1.2.8-build.2091+sha.75345e3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2091+sha.75345e3">v1.2.8-build.2091+sha.75345e3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2090+sha.e115342/angular-mocks.js"
                 data-name="v1.2.8-build.2090+sha.e115342"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2090+sha.e115342">v1.2.8-build.2090+sha.e115342</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2089+sha.e89150c/angular-mocks.js"
                 data-name="v1.2.8-build.2089+sha.e89150c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2089+sha.e89150c">v1.2.8-build.2089+sha.e89150c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2088+sha.9693a42/angular-mocks.js"
                 data-name="v1.2.8-build.2088+sha.9693a42"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2088+sha.9693a42">v1.2.8-build.2088+sha.9693a42</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2087+sha.affcbad/angular-mocks.js"
                 data-name="v1.2.8-build.2087+sha.affcbad"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2087+sha.affcbad">v1.2.8-build.2087+sha.affcbad</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2085+sha.1b0718b/angular-mocks.js"
                 data-name="v1.2.8-build.2085+sha.1b0718b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2085+sha.1b0718b">v1.2.8-build.2085+sha.1b0718b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2084+sha.53fd24f/angular-mocks.js"
                 data-name="v1.2.8-build.2084+sha.53fd24f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2084+sha.53fd24f">v1.2.8-build.2084+sha.53fd24f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2083+sha.28cfd96/angular-mocks.js"
                 data-name="v1.2.8-build.2083+sha.28cfd96"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2083+sha.28cfd96">v1.2.8-build.2083+sha.28cfd96</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2082+sha.99d5def/angular-mocks.js"
                 data-name="v1.2.8-build.2082+sha.99d5def"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2082+sha.99d5def">v1.2.8-build.2082+sha.99d5def</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2081+sha.efbc242/angular-mocks.js"
                 data-name="v1.2.8-build.2081+sha.efbc242"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2081+sha.efbc242">v1.2.8-build.2081+sha.efbc242</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2080+sha.d4d58f2/angular-mocks.js"
                 data-name="v1.2.8-build.2080+sha.d4d58f2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2080+sha.d4d58f2">v1.2.8-build.2080+sha.d4d58f2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2079+sha.dc89db3/angular-mocks.js"
                 data-name="v1.2.8-build.2079+sha.dc89db3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2079+sha.dc89db3">v1.2.8-build.2079+sha.dc89db3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2078+sha.5dc2795/angular-mocks.js"
                 data-name="v1.2.8-build.2078+sha.5dc2795"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2078+sha.5dc2795">v1.2.8-build.2078+sha.5dc2795</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2077+sha.4c21355/angular-mocks.js"
                 data-name="v1.2.8-build.2077+sha.4c21355"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2077+sha.4c21355">v1.2.8-build.2077+sha.4c21355</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2076+sha.6f6cb5c/angular-mocks.js"
                 data-name="v1.2.8-build.2076+sha.6f6cb5c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2076+sha.6f6cb5c">v1.2.8-build.2076+sha.6f6cb5c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2074+sha.821ed31/angular-mocks.js"
                 data-name="v1.2.8-build.2074+sha.821ed31"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2074+sha.821ed31">v1.2.8-build.2074+sha.821ed31</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2073+sha.a7aa4cc/angular-mocks.js"
                 data-name="v1.2.8-build.2073+sha.a7aa4cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2073+sha.a7aa4cc">v1.2.8-build.2073+sha.a7aa4cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2072+sha.e0ce9ed/angular-mocks.js"
                 data-name="v1.2.8-build.2072+sha.e0ce9ed"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2072+sha.e0ce9ed">v1.2.8-build.2072+sha.e0ce9ed</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2071+sha.caeb740/angular-mocks.js"
                 data-name="v1.2.8-build.2071+sha.caeb740"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2071+sha.caeb740">v1.2.8-build.2071+sha.caeb740</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2070+sha.1bb33cc/angular-mocks.js"
                 data-name="v1.2.8-build.2070+sha.1bb33cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2070+sha.1bb33cc">v1.2.8-build.2070+sha.1bb33cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2069+sha.1bb33cc/angular-mocks.js"
                 data-name="v1.2.8-build.2069+sha.1bb33cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2069+sha.1bb33cc">v1.2.8-build.2069+sha.1bb33cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2068+sha.d9ed9c5/angular-mocks.js"
                 data-name="v1.2.8-build.2068+sha.d9ed9c5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2068+sha.d9ed9c5">v1.2.8-build.2068+sha.d9ed9c5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2067+sha.00cac6e/angular-mocks.js"
                 data-name="v1.2.8-build.2067+sha.00cac6e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2067+sha.00cac6e">v1.2.8-build.2067+sha.00cac6e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2066+sha.2e9d7cc/angular-mocks.js"
                 data-name="v1.2.8-build.2066+sha.2e9d7cc"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2066+sha.2e9d7cc">v1.2.8-build.2066+sha.2e9d7cc</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2065+sha.32cc6cb/angular-mocks.js"
                 data-name="v1.2.8-build.2065+sha.32cc6cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2065+sha.32cc6cb">v1.2.8-build.2065+sha.32cc6cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2064+sha.3b1a4fe/angular-mocks.js"
                 data-name="v1.2.8-build.2064+sha.3b1a4fe"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2064+sha.3b1a4fe">v1.2.8-build.2064+sha.3b1a4fe</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2063+sha.9569778/angular-mocks.js"
                 data-name="v1.2.8-build.2063+sha.9569778"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2063+sha.9569778">v1.2.8-build.2063+sha.9569778</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2062+sha.0f61316/angular-mocks.js"
                 data-name="v1.2.8-build.2062+sha.0f61316"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2062+sha.0f61316">v1.2.8-build.2062+sha.0f61316</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2061+sha.86151b0/angular-mocks.js"
                 data-name="v1.2.8-build.2061+sha.86151b0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2061+sha.86151b0">v1.2.8-build.2061+sha.86151b0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2060+sha.1b7a6c6/angular-mocks.js"
                 data-name="v1.2.8-build.2060+sha.1b7a6c6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2060+sha.1b7a6c6">v1.2.8-build.2060+sha.1b7a6c6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8-build.2059+sha.0ef76dd/angular-mocks.js"
                 data-name="v1.2.8-build.2059+sha.0ef76dd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8-build.2059+sha.0ef76dd">v1.2.8-build.2059+sha.0ef76dd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.8/angular-mocks.js"
                 data-name="v1.2.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.8">v1.2.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2057+sha.3d38fff/angular-mocks.js"
                 data-name="v1.2.7-build.2057+sha.3d38fff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2057+sha.3d38fff">v1.2.7-build.2057+sha.3d38fff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2045+sha.6a6f71f/angular-mocks.js"
                 data-name="v1.2.7-build.2045+sha.6a6f71f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2045+sha.6a6f71f">v1.2.7-build.2045+sha.6a6f71f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2044+sha.cf68628/angular-mocks.js"
                 data-name="v1.2.7-build.2044+sha.cf68628"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2044+sha.cf68628">v1.2.7-build.2044+sha.cf68628</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2043+sha.760f2fb/angular-mocks.js"
                 data-name="v1.2.7-build.2043+sha.760f2fb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2043+sha.760f2fb">v1.2.7-build.2043+sha.760f2fb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2042+sha.c9705b7/angular-mocks.js"
                 data-name="v1.2.7-build.2042+sha.c9705b7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2042+sha.c9705b7">v1.2.7-build.2042+sha.c9705b7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2041+sha.53ec33f/angular-mocks.js"
                 data-name="v1.2.7-build.2041+sha.53ec33f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2041+sha.53ec33f">v1.2.7-build.2041+sha.53ec33f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2040+sha.884ef0d/angular-mocks.js"
                 data-name="v1.2.7-build.2040+sha.884ef0d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2040+sha.884ef0d">v1.2.7-build.2040+sha.884ef0d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2039+sha.4f57236/angular-mocks.js"
                 data-name="v1.2.7-build.2039+sha.4f57236"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2039+sha.4f57236">v1.2.7-build.2039+sha.4f57236</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2038+sha.50bf029/angular-mocks.js"
                 data-name="v1.2.7-build.2038+sha.50bf029"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2038+sha.50bf029">v1.2.7-build.2038+sha.50bf029</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2036+sha.e415e91/angular-mocks.js"
                 data-name="v1.2.7-build.2036+sha.e415e91"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2036+sha.e415e91">v1.2.7-build.2036+sha.e415e91</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2029+sha.80e7a45/angular-mocks.js"
                 data-name="v1.2.7-build.2029+sha.80e7a45"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2029+sha.80e7a45">v1.2.7-build.2029+sha.80e7a45</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2028+sha.498365f/angular-mocks.js"
                 data-name="v1.2.7-build.2028+sha.498365f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2028+sha.498365f">v1.2.7-build.2028+sha.498365f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2027+sha.056c849/angular-mocks.js"
                 data-name="v1.2.7-build.2027+sha.056c849"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2027+sha.056c849">v1.2.7-build.2027+sha.056c849</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2026+sha.7d6e5a2/angular-mocks.js"
                 data-name="v1.2.7-build.2026+sha.7d6e5a2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2026+sha.7d6e5a2">v1.2.7-build.2026+sha.7d6e5a2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2025+sha.d1c4766/angular-mocks.js"
                 data-name="v1.2.7-build.2025+sha.d1c4766"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2025+sha.d1c4766">v1.2.7-build.2025+sha.d1c4766</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2024+sha.9847383/angular-mocks.js"
                 data-name="v1.2.7-build.2024+sha.9847383"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2024+sha.9847383">v1.2.7-build.2024+sha.9847383</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2023+sha.870232b/angular-mocks.js"
                 data-name="v1.2.7-build.2023+sha.870232b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2023+sha.870232b">v1.2.7-build.2023+sha.870232b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2022+sha.c31df32/angular-mocks.js"
                 data-name="v1.2.7-build.2022+sha.c31df32"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2022+sha.c31df32">v1.2.7-build.2022+sha.c31df32</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2021+sha.df2b88e/angular-mocks.js"
                 data-name="v1.2.7-build.2021+sha.df2b88e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2021+sha.df2b88e">v1.2.7-build.2021+sha.df2b88e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7-build.2020+sha.af7203e/angular-mocks.js"
                 data-name="v1.2.7-build.2020+sha.af7203e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7-build.2020+sha.af7203e">v1.2.7-build.2020+sha.af7203e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.7/angular-mocks.js"
                 data-name="v1.2.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.7">v1.2.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2018+sha.fe7decd/angular-mocks.js"
                 data-name="v1.2.6-build.2018+sha.fe7decd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2018+sha.fe7decd">v1.2.6-build.2018+sha.fe7decd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2017+sha.cef084a/angular-mocks.js"
                 data-name="v1.2.6-build.2017+sha.cef084a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2017+sha.cef084a">v1.2.6-build.2017+sha.cef084a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2016+sha.937caab/angular-mocks.js"
                 data-name="v1.2.6-build.2016+sha.937caab"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2016+sha.937caab">v1.2.6-build.2016+sha.937caab</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2015+sha.3fc8017/angular-mocks.js"
                 data-name="v1.2.6-build.2015+sha.3fc8017"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2015+sha.3fc8017">v1.2.6-build.2015+sha.3fc8017</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2014+sha.277a5ea/angular-mocks.js"
                 data-name="v1.2.6-build.2014+sha.277a5ea"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2014+sha.277a5ea">v1.2.6-build.2014+sha.277a5ea</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2013+sha.efba473/angular-mocks.js"
                 data-name="v1.2.6-build.2013+sha.efba473"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2013+sha.efba473">v1.2.6-build.2013+sha.efba473</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2012+sha.14d3e55/angular-mocks.js"
                 data-name="v1.2.6-build.2012+sha.14d3e55"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2012+sha.14d3e55">v1.2.6-build.2012+sha.14d3e55</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2011+sha.3d156a7/angular-mocks.js"
                 data-name="v1.2.6-build.2011+sha.3d156a7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2011+sha.3d156a7">v1.2.6-build.2011+sha.3d156a7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2010+sha.c7a1d1a/angular-mocks.js"
                 data-name="v1.2.6-build.2010+sha.c7a1d1a"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2010+sha.c7a1d1a">v1.2.6-build.2010+sha.c7a1d1a</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2009+sha.26d43ca/angular-mocks.js"
                 data-name="v1.2.6-build.2009+sha.26d43ca"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2009+sha.26d43ca">v1.2.6-build.2009+sha.26d43ca</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2008+sha.4f5758e/angular-mocks.js"
                 data-name="v1.2.6-build.2008+sha.4f5758e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2008+sha.4f5758e">v1.2.6-build.2008+sha.4f5758e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2007+sha.f0e3dfd/angular-mocks.js"
                 data-name="v1.2.6-build.2007+sha.f0e3dfd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2007+sha.f0e3dfd">v1.2.6-build.2007+sha.f0e3dfd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2006+sha.bc3ff2c/angular-mocks.js"
                 data-name="v1.2.6-build.2006+sha.bc3ff2c"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2006+sha.bc3ff2c">v1.2.6-build.2006+sha.bc3ff2c</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2005+sha.8f329ff/angular-mocks.js"
                 data-name="v1.2.6-build.2005+sha.8f329ff"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2005+sha.8f329ff">v1.2.6-build.2005+sha.8f329ff</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2004+sha.864b259/angular-mocks.js"
                 data-name="v1.2.6-build.2004+sha.864b259"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2004+sha.864b259">v1.2.6-build.2004+sha.864b259</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2003+sha.f3a796e/angular-mocks.js"
                 data-name="v1.2.6-build.2003+sha.f3a796e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2003+sha.f3a796e">v1.2.6-build.2003+sha.f3a796e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2002+sha.09f8962/angular-mocks.js"
                 data-name="v1.2.6-build.2002+sha.09f8962"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2002+sha.09f8962">v1.2.6-build.2002+sha.09f8962</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2001+sha.3dc1803/angular-mocks.js"
                 data-name="v1.2.6-build.2001+sha.3dc1803"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2001+sha.3dc1803">v1.2.6-build.2001+sha.3dc1803</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.2000+sha.73c6671/angular-mocks.js"
                 data-name="v1.2.6-build.2000+sha.73c6671"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.2000+sha.73c6671">v1.2.6-build.2000+sha.73c6671</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1999+sha.cb29632/angular-mocks.js"
                 data-name="v1.2.6-build.1999+sha.cb29632"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1999+sha.cb29632">v1.2.6-build.1999+sha.cb29632</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1998+sha.5c97731/angular-mocks.js"
                 data-name="v1.2.6-build.1998+sha.5c97731"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1998+sha.5c97731">v1.2.6-build.1998+sha.5c97731</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1997+sha.b2e472e/angular-mocks.js"
                 data-name="v1.2.6-build.1997+sha.b2e472e"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1997+sha.b2e472e">v1.2.6-build.1997+sha.b2e472e</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1996+sha.6ac773f/angular-mocks.js"
                 data-name="v1.2.6-build.1996+sha.6ac773f"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1996+sha.6ac773f">v1.2.6-build.1996+sha.6ac773f</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1994+sha.4f72433/angular-mocks.js"
                 data-name="v1.2.6-build.1994+sha.4f72433"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1994+sha.4f72433">v1.2.6-build.1994+sha.4f72433</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1993+sha.2f91cfd/angular-mocks.js"
                 data-name="v1.2.6-build.1993+sha.2f91cfd"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1993+sha.2f91cfd">v1.2.6-build.1993+sha.2f91cfd</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1992+sha.d5c5e2b/angular-mocks.js"
                 data-name="v1.2.6-build.1992+sha.d5c5e2b"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1992+sha.d5c5e2b">v1.2.6-build.1992+sha.d5c5e2b</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1991+sha.cbb3ce2/angular-mocks.js"
                 data-name="v1.2.6-build.1991+sha.cbb3ce2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1991+sha.cbb3ce2">v1.2.6-build.1991+sha.cbb3ce2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1990+sha.45af02d/angular-mocks.js"
                 data-name="v1.2.6-build.1990+sha.45af02d"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1990+sha.45af02d">v1.2.6-build.1990+sha.45af02d</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1989+sha.b0474cb/angular-mocks.js"
                 data-name="v1.2.6-build.1989+sha.b0474cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1989+sha.b0474cb">v1.2.6-build.1989+sha.b0474cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6-build.1988+sha.b0474cb/angular-mocks.js"
                 data-name="v1.2.6-build.1988+sha.b0474cb"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6-build.1988+sha.b0474cb">v1.2.6-build.1988+sha.b0474cb</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.6/angular-mocks.js"
                 data-name="v1.2.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.6">v1.2.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.5/angular-mocks.js"
                 data-name="v1.2.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.5">v1.2.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.4/angular-mocks.js"
                 data-name="v1.2.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.4">v1.2.4</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.3/angular-mocks.js"
                 data-name="v1.2.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.3">v1.2.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.2/angular-mocks.js"
                 data-name="v1.2.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.2">v1.2.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.1/angular-mocks.js"
                 data-name="v1.2.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.1">v1.2.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0-rc.3/angular-mocks.js"
                 data-name="v1.2.0-rc.3"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.3">v1.2.0-rc.3</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0-rc.2/angular-mocks.js"
                 data-name="v1.2.0-rc.2"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.2">v1.2.0-rc.2</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0-rc.1/angular-mocks.js"
                 data-name="v1.2.0-rc.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0-rc.1">v1.2.0-rc.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.2.0/angular-mocks.js"
                 data-name="v1.2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.2.0">v1.2.0</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.8/angular-mocks.js"
                 data-name="v1.0.8"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.8">v1.0.8</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.7/angular-mocks.js"
                 data-name="v1.0.7"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.7">v1.0.7</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.6/angular-mocks.js"
                 data-name="v1.0.6"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.6">v1.0.6</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.5/angular-mocks.js"
                 data-name="v1.0.5"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.5">v1.0.5</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/angular/bower-angular-mocks/tree/v1.0.4/angular-mocks.js"
                 data-name="v1.0.4"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text js-select-button-text css-truncate-target"
                 title="v1.0.4">v1.0.4</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/angular/bower-angular-mocks" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">bower-angular-mocks</span></a></span></span><span class="separator"> / </span><strong class="final-path">angular-mocks.js</strong> <span aria-label="copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="angular-mocks.js" data-copied-hint="copied!"><span class="octicon octicon-clippy"></span></span>
  </div>
</div>


  <div class="commit file-history-tease">
    <img alt="NgDashboard" class="main-avatar js-avatar" data-user="6013193" height="24" src="https://avatars1.githubusercontent.com/u/6013193?s=140" width="24" />
    <span class="author"><a href="/NgDashboard" rel="author">NgDashboard</a></span>
    <time class="js-relative-date" data-title-format="YYYY-MM-DD HH:mm:ss" datetime="2014-03-28T15:05:53-07:00" title="2014-03-28 15:05:53">March 28, 2014</time>
    <div class="commit-title">
        <a href="/angular/bower-angular-mocks/commit/573447ea342c2edbb8bbd776fa132876c8ae4457" class="message" data-pjax="true" title="v1.3.0-build.2535+sha.876df04">v1.3.0-build.2535+sha.876df04</a>
    </div>

    <div class="participation">
      <p class="quickstat"><a href="#blob_contributors_box" rel="facebox"><strong>5</strong>  contributors</a></p>
          <a class="avatar tooltipped tooltipped-s" aria-label="NgDashboard" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=NgDashboard"><img alt="NgDashboard" class=" js-avatar" data-user="6013193" height="20" src="https://avatars1.githubusercontent.com/u/6013193?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="btford" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=btford"><img alt="Brian Ford" class=" js-avatar" data-user="474988" height="20" src="https://avatars1.githubusercontent.com/u/474988?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="jeffbcross" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=jeffbcross"><img alt="Jeff Cross" class=" js-avatar" data-user="463703" height="20" src="https://avatars1.githubusercontent.com/u/463703?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="tbosch" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=tbosch"><img alt="Tobias Bosch" class=" js-avatar" data-user="690815" height="20" src="https://avatars2.githubusercontent.com/u/690815?s=140" width="20" /></a>
    <a class="avatar tooltipped tooltipped-s" aria-label="vojtajina" href="/angular/bower-angular-mocks/commits/master/angular-mocks.js?author=vojtajina"><img alt="Vojta Jina" class=" js-avatar" data-user="46647" height="20" src="https://avatars2.githubusercontent.com/u/46647?s=140" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="NgDashboard" class=" js-avatar" data-user="6013193" height="24" src="https://avatars1.githubusercontent.com/u/6013193?s=140" width="24" />
            <a href="/NgDashboard">NgDashboard</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Brian Ford" class=" js-avatar" data-user="474988" height="24" src="https://avatars1.githubusercontent.com/u/474988?s=140" width="24" />
            <a href="/btford">btford</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jeff Cross" class=" js-avatar" data-user="463703" height="24" src="https://avatars1.githubusercontent.com/u/463703?s=140" width="24" />
            <a href="/jeffbcross">jeffbcross</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Tobias Bosch" class=" js-avatar" data-user="690815" height="24" src="https://avatars2.githubusercontent.com/u/690815?s=140" width="24" />
            <a href="/tbosch">tbosch</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Vojta Jina" class=" js-avatar" data-user="46647" height="24" src="https://avatars2.githubusercontent.com/u/46647?s=140" width="24" />
            <a href="/vojtajina">vojtajina</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
        <span class="icon"><b class="octicon octicon-file-text"></b></span>
        <span class="mode" title="File Mode">file</span>
        <span class="meta-divider"></span>
          <span>2188 lines (1942 sloc)</span>
          <span class="meta-divider"></span>
        <span>70.323 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
            <a class="minibutton tooltipped tooltipped-w"
               href="http://windows.github.com" aria-label="Open this file in GitHub for Windows">
                <span class="octicon octicon-device-desktop"></span> Open
            </a>
              <a class="minibutton disabled tooltipped tooltipped-w" href="#"
                 aria-label="You must be signed in to make or propose changes">Edit</a>
          <a href="/angular/bower-angular-mocks/raw/master/angular-mocks.js" class="button minibutton " id="raw-url">Raw</a>
            <a href="/angular/bower-angular-mocks/blame/master/angular-mocks.js" class="button minibutton js-update-url-with-hash">Blame</a>
          <a href="/angular/bower-angular-mocks/commits/master/angular-mocks.js" class="button minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->
          <a class="minibutton danger disabled empty-icon tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          Delete
        </a>
      </div><!-- /.actions -->
    </div>
        <div class="blob-wrapper data type-javascript js-blob-data">
        <table class="file-code file-diff tab-size-8">
          <tr class="file-code-line">
            <td class="blob-line-nums">
              <span id="L1" rel="#L1">1</span>
<span id="L2" rel="#L2">2</span>
<span id="L3" rel="#L3">3</span>
<span id="L4" rel="#L4">4</span>
<span id="L5" rel="#L5">5</span>
<span id="L6" rel="#L6">6</span>
<span id="L7" rel="#L7">7</span>
<span id="L8" rel="#L8">8</span>
<span id="L9" rel="#L9">9</span>
<span id="L10" rel="#L10">10</span>
<span id="L11" rel="#L11">11</span>
<span id="L12" rel="#L12">12</span>
<span id="L13" rel="#L13">13</span>
<span id="L14" rel="#L14">14</span>
<span id="L15" rel="#L15">15</span>
<span id="L16" rel="#L16">16</span>
<span id="L17" rel="#L17">17</span>
<span id="L18" rel="#L18">18</span>
<span id="L19" rel="#L19">19</span>
<span id="L20" rel="#L20">20</span>
<span id="L21" rel="#L21">21</span>
<span id="L22" rel="#L22">22</span>
<span id="L23" rel="#L23">23</span>
<span id="L24" rel="#L24">24</span>
<span id="L25" rel="#L25">25</span>
<span id="L26" rel="#L26">26</span>
<span id="L27" rel="#L27">27</span>
<span id="L28" rel="#L28">28</span>
<span id="L29" rel="#L29">29</span>
<span id="L30" rel="#L30">30</span>
<span id="L31" rel="#L31">31</span>
<span id="L32" rel="#L32">32</span>
<span id="L33" rel="#L33">33</span>
<span id="L34" rel="#L34">34</span>
<span id="L35" rel="#L35">35</span>
<span id="L36" rel="#L36">36</span>
<span id="L37" rel="#L37">37</span>
<span id="L38" rel="#L38">38</span>
<span id="L39" rel="#L39">39</span>
<span id="L40" rel="#L40">40</span>
<span id="L41" rel="#L41">41</span>
<span id="L42" rel="#L42">42</span>
<span id="L43" rel="#L43">43</span>
<span id="L44" rel="#L44">44</span>
<span id="L45" rel="#L45">45</span>
<span id="L46" rel="#L46">46</span>
<span id="L47" rel="#L47">47</span>
<span id="L48" rel="#L48">48</span>
<span id="L49" rel="#L49">49</span>
<span id="L50" rel="#L50">50</span>
<span id="L51" rel="#L51">51</span>
<span id="L52" rel="#L52">52</span>
<span id="L53" rel="#L53">53</span>
<span id="L54" rel="#L54">54</span>
<span id="L55" rel="#L55">55</span>
<span id="L56" rel="#L56">56</span>
<span id="L57" rel="#L57">57</span>
<span id="L58" rel="#L58">58</span>
<span id="L59" rel="#L59">59</span>
<span id="L60" rel="#L60">60</span>
<span id="L61" rel="#L61">61</span>
<span id="L62" rel="#L62">62</span>
<span id="L63" rel="#L63">63</span>
<span id="L64" rel="#L64">64</span>
<span id="L65" rel="#L65">65</span>
<span id="L66" rel="#L66">66</span>
<span id="L67" rel="#L67">67</span>
<span id="L68" rel="#L68">68</span>
<span id="L69" rel="#L69">69</span>
<span id="L70" rel="#L70">70</span>
<span id="L71" rel="#L71">71</span>
<span id="L72" rel="#L72">72</span>
<span id="L73" rel="#L73">73</span>
<span id="L74" rel="#L74">74</span>
<span id="L75" rel="#L75">75</span>
<span id="L76" rel="#L76">76</span>
<span id="L77" rel="#L77">77</span>
<span id="L78" rel="#L78">78</span>
<span id="L79" rel="#L79">79</span>
<span id="L80" rel="#L80">80</span>
<span id="L81" rel="#L81">81</span>
<span id="L82" rel="#L82">82</span>
<span id="L83" rel="#L83">83</span>
<span id="L84" rel="#L84">84</span>
<span id="L85" rel="#L85">85</span>
<span id="L86" rel="#L86">86</span>
<span id="L87" rel="#L87">87</span>
<span id="L88" rel="#L88">88</span>
<span id="L89" rel="#L89">89</span>
<span id="L90" rel="#L90">90</span>
<span id="L91" rel="#L91">91</span>
<span id="L92" rel="#L92">92</span>
<span id="L93" rel="#L93">93</span>
<span id="L94" rel="#L94">94</span>
<span id="L95" rel="#L95">95</span>
<span id="L96" rel="#L96">96</span>
<span id="L97" rel="#L97">97</span>
<span id="L98" rel="#L98">98</span>
<span id="L99" rel="#L99">99</span>
<span id="L100" rel="#L100">100</span>
<span id="L101" rel="#L101">101</span>
<span id="L102" rel="#L102">102</span>
<span id="L103" rel="#L103">103</span>
<span id="L104" rel="#L104">104</span>
<span id="L105" rel="#L105">105</span>
<span id="L106" rel="#L106">106</span>
<span id="L107" rel="#L107">107</span>
<span id="L108" rel="#L108">108</span>
<span id="L109" rel="#L109">109</span>
<span id="L110" rel="#L110">110</span>
<span id="L111" rel="#L111">111</span>
<span id="L112" rel="#L112">112</span>
<span id="L113" rel="#L113">113</span>
<span id="L114" rel="#L114">114</span>
<span id="L115" rel="#L115">115</span>
<span id="L116" rel="#L116">116</span>
<span id="L117" rel="#L117">117</span>
<span id="L118" rel="#L118">118</span>
<span id="L119" rel="#L119">119</span>
<span id="L120" rel="#L120">120</span>
<span id="L121" rel="#L121">121</span>
<span id="L122" rel="#L122">122</span>
<span id="L123" rel="#L123">123</span>
<span id="L124" rel="#L124">124</span>
<span id="L125" rel="#L125">125</span>
<span id="L126" rel="#L126">126</span>
<span id="L127" rel="#L127">127</span>
<span id="L128" rel="#L128">128</span>
<span id="L129" rel="#L129">129</span>
<span id="L130" rel="#L130">130</span>
<span id="L131" rel="#L131">131</span>
<span id="L132" rel="#L132">132</span>
<span id="L133" rel="#L133">133</span>
<span id="L134" rel="#L134">134</span>
<span id="L135" rel="#L135">135</span>
<span id="L136" rel="#L136">136</span>
<span id="L137" rel="#L137">137</span>
<span id="L138" rel="#L138">138</span>
<span id="L139" rel="#L139">139</span>
<span id="L140" rel="#L140">140</span>
<span id="L141" rel="#L141">141</span>
<span id="L142" rel="#L142">142</span>
<span id="L143" rel="#L143">143</span>
<span id="L144" rel="#L144">144</span>
<span id="L145" rel="#L145">145</span>
<span id="L146" rel="#L146">146</span>
<span id="L147" rel="#L147">147</span>
<span id="L148" rel="#L148">148</span>
<span id="L149" rel="#L149">149</span>
<span id="L150" rel="#L150">150</span>
<span id="L151" rel="#L151">151</span>
<span id="L152" rel="#L152">152</span>
<span id="L153" rel="#L153">153</span>
<span id="L154" rel="#L154">154</span>
<span id="L155" rel="#L155">155</span>
<span id="L156" rel="#L156">156</span>
<span id="L157" rel="#L157">157</span>
<span id="L158" rel="#L158">158</span>
<span id="L159" rel="#L159">159</span>
<span id="L160" rel="#L160">160</span>
<span id="L161" rel="#L161">161</span>
<span id="L162" rel="#L162">162</span>
<span id="L163" rel="#L163">163</span>
<span id="L164" rel="#L164">164</span>
<span id="L165" rel="#L165">165</span>
<span id="L166" rel="#L166">166</span>
<span id="L167" rel="#L167">167</span>
<span id="L168" rel="#L168">168</span>
<span id="L169" rel="#L169">169</span>
<span id="L170" rel="#L170">170</span>
<span id="L171" rel="#L171">171</span>
<span id="L172" rel="#L172">172</span>
<span id="L173" rel="#L173">173</span>
<span id="L174" rel="#L174">174</span>
<span id="L175" rel="#L175">175</span>
<span id="L176" rel="#L176">176</span>
<span id="L177" rel="#L177">177</span>
<span id="L178" rel="#L178">178</span>
<span id="L179" rel="#L179">179</span>
<span id="L180" rel="#L180">180</span>
<span id="L181" rel="#L181">181</span>
<span id="L182" rel="#L182">182</span>
<span id="L183" rel="#L183">183</span>
<span id="L184" rel="#L184">184</span>
<span id="L185" rel="#L185">185</span>
<span id="L186" rel="#L186">186</span>
<span id="L187" rel="#L187">187</span>
<span id="L188" rel="#L188">188</span>
<span id="L189" rel="#L189">189</span>
<span id="L190" rel="#L190">190</span>
<span id="L191" rel="#L191">191</span>
<span id="L192" rel="#L192">192</span>
<span id="L193" rel="#L193">193</span>
<span id="L194" rel="#L194">194</span>
<span id="L195" rel="#L195">195</span>
<span id="L196" rel="#L196">196</span>
<span id="L197" rel="#L197">197</span>
<span id="L198" rel="#L198">198</span>
<span id="L199" rel="#L199">199</span>
<span id="L200" rel="#L200">200</span>
<span id="L201" rel="#L201">201</span>
<span id="L202" rel="#L202">202</span>
<span id="L203" rel="#L203">203</span>
<span id="L204" rel="#L204">204</span>
<span id="L205" rel="#L205">205</span>
<span id="L206" rel="#L206">206</span>
<span id="L207" rel="#L207">207</span>
<span id="L208" rel="#L208">208</span>
<span id="L209" rel="#L209">209</span>
<span id="L210" rel="#L210">210</span>
<span id="L211" rel="#L211">211</span>
<span id="L212" rel="#L212">212</span>
<span id="L213" rel="#L213">213</span>
<span id="L214" rel="#L214">214</span>
<span id="L215" rel="#L215">215</span>
<span id="L216" rel="#L216">216</span>
<span id="L217" rel="#L217">217</span>
<span id="L218" rel="#L218">218</span>
<span id="L219" rel="#L219">219</span>
<span id="L220" rel="#L220">220</span>
<span id="L221" rel="#L221">221</span>
<span id="L222" rel="#L222">222</span>
<span id="L223" rel="#L223">223</span>
<span id="L224" rel="#L224">224</span>
<span id="L225" rel="#L225">225</span>
<span id="L226" rel="#L226">226</span>
<span id="L227" rel="#L227">227</span>
<span id="L228" rel="#L228">228</span>
<span id="L229" rel="#L229">229</span>
<span id="L230" rel="#L230">230</span>
<span id="L231" rel="#L231">231</span>
<span id="L232" rel="#L232">232</span>
<span id="L233" rel="#L233">233</span>
<span id="L234" rel="#L234">234</span>
<span id="L235" rel="#L235">235</span>
<span id="L236" rel="#L236">236</span>
<span id="L237" rel="#L237">237</span>
<span id="L238" rel="#L238">238</span>
<span id="L239" rel="#L239">239</span>
<span id="L240" rel="#L240">240</span>
<span id="L241" rel="#L241">241</span>
<span id="L242" rel="#L242">242</span>
<span id="L243" rel="#L243">243</span>
<span id="L244" rel="#L244">244</span>
<span id="L245" rel="#L245">245</span>
<span id="L246" rel="#L246">246</span>
<span id="L247" rel="#L247">247</span>
<span id="L248" rel="#L248">248</span>
<span id="L249" rel="#L249">249</span>
<span id="L250" rel="#L250">250</span>
<span id="L251" rel="#L251">251</span>
<span id="L252" rel="#L252">252</span>
<span id="L253" rel="#L253">253</span>
<span id="L254" rel="#L254">254</span>
<span id="L255" rel="#L255">255</span>
<span id="L256" rel="#L256">256</span>
<span id="L257" rel="#L257">257</span>
<span id="L258" rel="#L258">258</span>
<span id="L259" rel="#L259">259</span>
<span id="L260" rel="#L260">260</span>
<span id="L261" rel="#L261">261</span>
<span id="L262" rel="#L262">262</span>
<span id="L263" rel="#L263">263</span>
<span id="L264" rel="#L264">264</span>
<span id="L265" rel="#L265">265</span>
<span id="L266" rel="#L266">266</span>
<span id="L267" rel="#L267">267</span>
<span id="L268" rel="#L268">268</span>
<span id="L269" rel="#L269">269</span>
<span id="L270" rel="#L270">270</span>
<span id="L271" rel="#L271">271</span>
<span id="L272" rel="#L272">272</span>
<span id="L273" rel="#L273">273</span>
<span id="L274" rel="#L274">274</span>
<span id="L275" rel="#L275">275</span>
<span id="L276" rel="#L276">276</span>
<span id="L277" rel="#L277">277</span>
<span id="L278" rel="#L278">278</span>
<span id="L279" rel="#L279">279</span>
<span id="L280" rel="#L280">280</span>
<span id="L281" rel="#L281">281</span>
<span id="L282" rel="#L282">282</span>
<span id="L283" rel="#L283">283</span>
<span id="L284" rel="#L284">284</span>
<span id="L285" rel="#L285">285</span>
<span id="L286" rel="#L286">286</span>
<span id="L287" rel="#L287">287</span>
<span id="L288" rel="#L288">288</span>
<span id="L289" rel="#L289">289</span>
<span id="L290" rel="#L290">290</span>
<span id="L291" rel="#L291">291</span>
<span id="L292" rel="#L292">292</span>
<span id="L293" rel="#L293">293</span>
<span id="L294" rel="#L294">294</span>
<span id="L295" rel="#L295">295</span>
<span id="L296" rel="#L296">296</span>
<span id="L297" rel="#L297">297</span>
<span id="L298" rel="#L298">298</span>
<span id="L299" rel="#L299">299</span>
<span id="L300" rel="#L300">300</span>
<span id="L301" rel="#L301">301</span>
<span id="L302" rel="#L302">302</span>
<span id="L303" rel="#L303">303</span>
<span id="L304" rel="#L304">304</span>
<span id="L305" rel="#L305">305</span>
<span id="L306" rel="#L306">306</span>
<span id="L307" rel="#L307">307</span>
<span id="L308" rel="#L308">308</span>
<span id="L309" rel="#L309">309</span>
<span id="L310" rel="#L310">310</span>
<span id="L311" rel="#L311">311</span>
<span id="L312" rel="#L312">312</span>
<span id="L313" rel="#L313">313</span>
<span id="L314" rel="#L314">314</span>
<span id="L315" rel="#L315">315</span>
<span id="L316" rel="#L316">316</span>
<span id="L317" rel="#L317">317</span>
<span id="L318" rel="#L318">318</span>
<span id="L319" rel="#L319">319</span>
<span id="L320" rel="#L320">320</span>
<span id="L321" rel="#L321">321</span>
<span id="L322" rel="#L322">322</span>
<span id="L323" rel="#L323">323</span>
<span id="L324" rel="#L324">324</span>
<span id="L325" rel="#L325">325</span>
<span id="L326" rel="#L326">326</span>
<span id="L327" rel="#L327">327</span>
<span id="L328" rel="#L328">328</span>
<span id="L329" rel="#L329">329</span>
<span id="L330" rel="#L330">330</span>
<span id="L331" rel="#L331">331</span>
<span id="L332" rel="#L332">332</span>
<span id="L333" rel="#L333">333</span>
<span id="L334" rel="#L334">334</span>
<span id="L335" rel="#L335">335</span>
<span id="L336" rel="#L336">336</span>
<span id="L337" rel="#L337">337</span>
<span id="L338" rel="#L338">338</span>
<span id="L339" rel="#L339">339</span>
<span id="L340" rel="#L340">340</span>
<span id="L341" rel="#L341">341</span>
<span id="L342" rel="#L342">342</span>
<span id="L343" rel="#L343">343</span>
<span id="L344" rel="#L344">344</span>
<span id="L345" rel="#L345">345</span>
<span id="L346" rel="#L346">346</span>
<span id="L347" rel="#L347">347</span>
<span id="L348" rel="#L348">348</span>
<span id="L349" rel="#L349">349</span>
<span id="L350" rel="#L350">350</span>
<span id="L351" rel="#L351">351</span>
<span id="L352" rel="#L352">352</span>
<span id="L353" rel="#L353">353</span>
<span id="L354" rel="#L354">354</span>
<span id="L355" rel="#L355">355</span>
<span id="L356" rel="#L356">356</span>
<span id="L357" rel="#L357">357</span>
<span id="L358" rel="#L358">358</span>
<span id="L359" rel="#L359">359</span>
<span id="L360" rel="#L360">360</span>
<span id="L361" rel="#L361">361</span>
<span id="L362" rel="#L362">362</span>
<span id="L363" rel="#L363">363</span>
<span id="L364" rel="#L364">364</span>
<span id="L365" rel="#L365">365</span>
<span id="L366" rel="#L366">366</span>
<span id="L367" rel="#L367">367</span>
<span id="L368" rel="#L368">368</span>
<span id="L369" rel="#L369">369</span>
<span id="L370" rel="#L370">370</span>
<span id="L371" rel="#L371">371</span>
<span id="L372" rel="#L372">372</span>
<span id="L373" rel="#L373">373</span>
<span id="L374" rel="#L374">374</span>
<span id="L375" rel="#L375">375</span>
<span id="L376" rel="#L376">376</span>
<span id="L377" rel="#L377">377</span>
<span id="L378" rel="#L378">378</span>
<span id="L379" rel="#L379">379</span>
<span id="L380" rel="#L380">380</span>
<span id="L381" rel="#L381">381</span>
<span id="L382" rel="#L382">382</span>
<span id="L383" rel="#L383">383</span>
<span id="L384" rel="#L384">384</span>
<span id="L385" rel="#L385">385</span>
<span id="L386" rel="#L386">386</span>
<span id="L387" rel="#L387">387</span>
<span id="L388" rel="#L388">388</span>
<span id="L389" rel="#L389">389</span>
<span id="L390" rel="#L390">390</span>
<span id="L391" rel="#L391">391</span>
<span id="L392" rel="#L392">392</span>
<span id="L393" rel="#L393">393</span>
<span id="L394" rel="#L394">394</span>
<span id="L395" rel="#L395">395</span>
<span id="L396" rel="#L396">396</span>
<span id="L397" rel="#L397">397</span>
<span id="L398" rel="#L398">398</span>
<span id="L399" rel="#L399">399</span>
<span id="L400" rel="#L400">400</span>
<span id="L401" rel="#L401">401</span>
<span id="L402" rel="#L402">402</span>
<span id="L403" rel="#L403">403</span>
<span id="L404" rel="#L404">404</span>
<span id="L405" rel="#L405">405</span>
<span id="L406" rel="#L406">406</span>
<span id="L407" rel="#L407">407</span>
<span id="L408" rel="#L408">408</span>
<span id="L409" rel="#L409">409</span>
<span id="L410" rel="#L410">410</span>
<span id="L411" rel="#L411">411</span>
<span id="L412" rel="#L412">412</span>
<span id="L413" rel="#L413">413</span>
<span id="L414" rel="#L414">414</span>
<span id="L415" rel="#L415">415</span>
<span id="L416" rel="#L416">416</span>
<span id="L417" rel="#L417">417</span>
<span id="L418" rel="#L418">418</span>
<span id="L419" rel="#L419">419</span>
<span id="L420" rel="#L420">420</span>
<span id="L421" rel="#L421">421</span>
<span id="L422" rel="#L422">422</span>
<span id="L423" rel="#L423">423</span>
<span id="L424" rel="#L424">424</span>
<span id="L425" rel="#L425">425</span>
<span id="L426" rel="#L426">426</span>
<span id="L427" rel="#L427">427</span>
<span id="L428" rel="#L428">428</span>
<span id="L429" rel="#L429">429</span>
<span id="L430" rel="#L430">430</span>
<span id="L431" rel="#L431">431</span>
<span id="L432" rel="#L432">432</span>
<span id="L433" rel="#L433">433</span>
<span id="L434" rel="#L434">434</span>
<span id="L435" rel="#L435">435</span>
<span id="L436" rel="#L436">436</span>
<span id="L437" rel="#L437">437</span>
<span id="L438" rel="#L438">438</span>
<span id="L439" rel="#L439">439</span>
<span id="L440" rel="#L440">440</span>
<span id="L441" rel="#L441">441</span>
<span id="L442" rel="#L442">442</span>
<span id="L443" rel="#L443">443</span>
<span id="L444" rel="#L444">444</span>
<span id="L445" rel="#L445">445</span>
<span id="L446" rel="#L446">446</span>
<span id="L447" rel="#L447">447</span>
<span id="L448" rel="#L448">448</span>
<span id="L449" rel="#L449">449</span>
<span id="L450" rel="#L450">450</span>
<span id="L451" rel="#L451">451</span>
<span id="L452" rel="#L452">452</span>
<span id="L453" rel="#L453">453</span>
<span id="L454" rel="#L454">454</span>
<span id="L455" rel="#L455">455</span>
<span id="L456" rel="#L456">456</span>
<span id="L457" rel="#L457">457</span>
<span id="L458" rel="#L458">458</span>
<span id="L459" rel="#L459">459</span>
<span id="L460" rel="#L460">460</span>
<span id="L461" rel="#L461">461</span>
<span id="L462" rel="#L462">462</span>
<span id="L463" rel="#L463">463</span>
<span id="L464" rel="#L464">464</span>
<span id="L465" rel="#L465">465</span>
<span id="L466" rel="#L466">466</span>
<span id="L467" rel="#L467">467</span>
<span id="L468" rel="#L468">468</span>
<span id="L469" rel="#L469">469</span>
<span id="L470" rel="#L470">470</span>
<span id="L471" rel="#L471">471</span>
<span id="L472" rel="#L472">472</span>
<span id="L473" rel="#L473">473</span>
<span id="L474" rel="#L474">474</span>
<span id="L475" rel="#L475">475</span>
<span id="L476" rel="#L476">476</span>
<span id="L477" rel="#L477">477</span>
<span id="L478" rel="#L478">478</span>
<span id="L479" rel="#L479">479</span>
<span id="L480" rel="#L480">480</span>
<span id="L481" rel="#L481">481</span>
<span id="L482" rel="#L482">482</span>
<span id="L483" rel="#L483">483</span>
<span id="L484" rel="#L484">484</span>
<span id="L485" rel="#L485">485</span>
<span id="L486" rel="#L486">486</span>
<span id="L487" rel="#L487">487</span>
<span id="L488" rel="#L488">488</span>
<span id="L489" rel="#L489">489</span>
<span id="L490" rel="#L490">490</span>
<span id="L491" rel="#L491">491</span>
<span id="L492" rel="#L492">492</span>
<span id="L493" rel="#L493">493</span>
<span id="L494" rel="#L494">494</span>
<span id="L495" rel="#L495">495</span>
<span id="L496" rel="#L496">496</span>
<span id="L497" rel="#L497">497</span>
<span id="L498" rel="#L498">498</span>
<span id="L499" rel="#L499">499</span>
<span id="L500" rel="#L500">500</span>
<span id="L501" rel="#L501">501</span>
<span id="L502" rel="#L502">502</span>
<span id="L503" rel="#L503">503</span>
<span id="L504" rel="#L504">504</span>
<span id="L505" rel="#L505">505</span>
<span id="L506" rel="#L506">506</span>
<span id="L507" rel="#L507">507</span>
<span id="L508" rel="#L508">508</span>
<span id="L509" rel="#L509">509</span>
<span id="L510" rel="#L510">510</span>
<span id="L511" rel="#L511">511</span>
<span id="L512" rel="#L512">512</span>
<span id="L513" rel="#L513">513</span>
<span id="L514" rel="#L514">514</span>
<span id="L515" rel="#L515">515</span>
<span id="L516" rel="#L516">516</span>
<span id="L517" rel="#L517">517</span>
<span id="L518" rel="#L518">518</span>
<span id="L519" rel="#L519">519</span>
<span id="L520" rel="#L520">520</span>
<span id="L521" rel="#L521">521</span>
<span id="L522" rel="#L522">522</span>
<span id="L523" rel="#L523">523</span>
<span id="L524" rel="#L524">524</span>
<span id="L525" rel="#L525">525</span>
<span id="L526" rel="#L526">526</span>
<span id="L527" rel="#L527">527</span>
<span id="L528" rel="#L528">528</span>
<span id="L529" rel="#L529">529</span>
<span id="L530" rel="#L530">530</span>
<span id="L531" rel="#L531">531</span>
<span id="L532" rel="#L532">532</span>
<span id="L533" rel="#L533">533</span>
<span id="L534" rel="#L534">534</span>
<span id="L535" rel="#L535">535</span>
<span id="L536" rel="#L536">536</span>
<span id="L537" rel="#L537">537</span>
<span id="L538" rel="#L538">538</span>
<span id="L539" rel="#L539">539</span>
<span id="L540" rel="#L540">540</span>
<span id="L541" rel="#L541">541</span>
<span id="L542" rel="#L542">542</span>
<span id="L543" rel="#L543">543</span>
<span id="L544" rel="#L544">544</span>
<span id="L545" rel="#L545">545</span>
<span id="L546" rel="#L546">546</span>
<span id="L547" rel="#L547">547</span>
<span id="L548" rel="#L548">548</span>
<span id="L549" rel="#L549">549</span>
<span id="L550" rel="#L550">550</span>
<span id="L551" rel="#L551">551</span>
<span id="L552" rel="#L552">552</span>
<span id="L553" rel="#L553">553</span>
<span id="L554" rel="#L554">554</span>
<span id="L555" rel="#L555">555</span>
<span id="L556" rel="#L556">556</span>
<span id="L557" rel="#L557">557</span>
<span id="L558" rel="#L558">558</span>
<span id="L559" rel="#L559">559</span>
<span id="L560" rel="#L560">560</span>
<span id="L561" rel="#L561">561</span>
<span id="L562" rel="#L562">562</span>
<span id="L563" rel="#L563">563</span>
<span id="L564" rel="#L564">564</span>
<span id="L565" rel="#L565">565</span>
<span id="L566" rel="#L566">566</span>
<span id="L567" rel="#L567">567</span>
<span id="L568" rel="#L568">568</span>
<span id="L569" rel="#L569">569</span>
<span id="L570" rel="#L570">570</span>
<span id="L571" rel="#L571">571</span>
<span id="L572" rel="#L572">572</span>
<span id="L573" rel="#L573">573</span>
<span id="L574" rel="#L574">574</span>
<span id="L575" rel="#L575">575</span>
<span id="L576" rel="#L576">576</span>
<span id="L577" rel="#L577">577</span>
<span id="L578" rel="#L578">578</span>
<span id="L579" rel="#L579">579</span>
<span id="L580" rel="#L580">580</span>
<span id="L581" rel="#L581">581</span>
<span id="L582" rel="#L582">582</span>
<span id="L583" rel="#L583">583</span>
<span id="L584" rel="#L584">584</span>
<span id="L585" rel="#L585">585</span>
<span id="L586" rel="#L586">586</span>
<span id="L587" rel="#L587">587</span>
<span id="L588" rel="#L588">588</span>
<span id="L589" rel="#L589">589</span>
<span id="L590" rel="#L590">590</span>
<span id="L591" rel="#L591">591</span>
<span id="L592" rel="#L592">592</span>
<span id="L593" rel="#L593">593</span>
<span id="L594" rel="#L594">594</span>
<span id="L595" rel="#L595">595</span>
<span id="L596" rel="#L596">596</span>
<span id="L597" rel="#L597">597</span>
<span id="L598" rel="#L598">598</span>
<span id="L599" rel="#L599">599</span>
<span id="L600" rel="#L600">600</span>
<span id="L601" rel="#L601">601</span>
<span id="L602" rel="#L602">602</span>
<span id="L603" rel="#L603">603</span>
<span id="L604" rel="#L604">604</span>
<span id="L605" rel="#L605">605</span>
<span id="L606" rel="#L606">606</span>
<span id="L607" rel="#L607">607</span>
<span id="L608" rel="#L608">608</span>
<span id="L609" rel="#L609">609</span>
<span id="L610" rel="#L610">610</span>
<span id="L611" rel="#L611">611</span>
<span id="L612" rel="#L612">612</span>
<span id="L613" rel="#L613">613</span>
<span id="L614" rel="#L614">614</span>
<span id="L615" rel="#L615">615</span>
<span id="L616" rel="#L616">616</span>
<span id="L617" rel="#L617">617</span>
<span id="L618" rel="#L618">618</span>
<span id="L619" rel="#L619">619</span>
<span id="L620" rel="#L620">620</span>
<span id="L621" rel="#L621">621</span>
<span id="L622" rel="#L622">622</span>
<span id="L623" rel="#L623">623</span>
<span id="L624" rel="#L624">624</span>
<span id="L625" rel="#L625">625</span>
<span id="L626" rel="#L626">626</span>
<span id="L627" rel="#L627">627</span>
<span id="L628" rel="#L628">628</span>
<span id="L629" rel="#L629">629</span>
<span id="L630" rel="#L630">630</span>
<span id="L631" rel="#L631">631</span>
<span id="L632" rel="#L632">632</span>
<span id="L633" rel="#L633">633</span>
<span id="L634" rel="#L634">634</span>
<span id="L635" rel="#L635">635</span>
<span id="L636" rel="#L636">636</span>
<span id="L637" rel="#L637">637</span>
<span id="L638" rel="#L638">638</span>
<span id="L639" rel="#L639">639</span>
<span id="L640" rel="#L640">640</span>
<span id="L641" rel="#L641">641</span>
<span id="L642" rel="#L642">642</span>
<span id="L643" rel="#L643">643</span>
<span id="L644" rel="#L644">644</span>
<span id="L645" rel="#L645">645</span>
<span id="L646" rel="#L646">646</span>
<span id="L647" rel="#L647">647</span>
<span id="L648" rel="#L648">648</span>
<span id="L649" rel="#L649">649</span>
<span id="L650" rel="#L650">650</span>
<span id="L651" rel="#L651">651</span>
<span id="L652" rel="#L652">652</span>
<span id="L653" rel="#L653">653</span>
<span id="L654" rel="#L654">654</span>
<span id="L655" rel="#L655">655</span>
<span id="L656" rel="#L656">656</span>
<span id="L657" rel="#L657">657</span>
<span id="L658" rel="#L658">658</span>
<span id="L659" rel="#L659">659</span>
<span id="L660" rel="#L660">660</span>
<span id="L661" rel="#L661">661</span>
<span id="L662" rel="#L662">662</span>
<span id="L663" rel="#L663">663</span>
<span id="L664" rel="#L664">664</span>
<span id="L665" rel="#L665">665</span>
<span id="L666" rel="#L666">666</span>
<span id="L667" rel="#L667">667</span>
<span id="L668" rel="#L668">668</span>
<span id="L669" rel="#L669">669</span>
<span id="L670" rel="#L670">670</span>
<span id="L671" rel="#L671">671</span>
<span id="L672" rel="#L672">672</span>
<span id="L673" rel="#L673">673</span>
<span id="L674" rel="#L674">674</span>
<span id="L675" rel="#L675">675</span>
<span id="L676" rel="#L676">676</span>
<span id="L677" rel="#L677">677</span>
<span id="L678" rel="#L678">678</span>
<span id="L679" rel="#L679">679</span>
<span id="L680" rel="#L680">680</span>
<span id="L681" rel="#L681">681</span>
<span id="L682" rel="#L682">682</span>
<span id="L683" rel="#L683">683</span>
<span id="L684" rel="#L684">684</span>
<span id="L685" rel="#L685">685</span>
<span id="L686" rel="#L686">686</span>
<span id="L687" rel="#L687">687</span>
<span id="L688" rel="#L688">688</span>
<span id="L689" rel="#L689">689</span>
<span id="L690" rel="#L690">690</span>
<span id="L691" rel="#L691">691</span>
<span id="L692" rel="#L692">692</span>
<span id="L693" rel="#L693">693</span>
<span id="L694" rel="#L694">694</span>
<span id="L695" rel="#L695">695</span>
<span id="L696" rel="#L696">696</span>
<span id="L697" rel="#L697">697</span>
<span id="L698" rel="#L698">698</span>
<span id="L699" rel="#L699">699</span>
<span id="L700" rel="#L700">700</span>
<span id="L701" rel="#L701">701</span>
<span id="L702" rel="#L702">702</span>
<span id="L703" rel="#L703">703</span>
<span id="L704" rel="#L704">704</span>
<span id="L705" rel="#L705">705</span>
<span id="L706" rel="#L706">706</span>
<span id="L707" rel="#L707">707</span>
<span id="L708" rel="#L708">708</span>
<span id="L709" rel="#L709">709</span>
<span id="L710" rel="#L710">710</span>
<span id="L711" rel="#L711">711</span>
<span id="L712" rel="#L712">712</span>
<span id="L713" rel="#L713">713</span>
<span id="L714" rel="#L714">714</span>
<span id="L715" rel="#L715">715</span>
<span id="L716" rel="#L716">716</span>
<span id="L717" rel="#L717">717</span>
<span id="L718" rel="#L718">718</span>
<span id="L719" rel="#L719">719</span>
<span id="L720" rel="#L720">720</span>
<span id="L721" rel="#L721">721</span>
<span id="L722" rel="#L722">722</span>
<span id="L723" rel="#L723">723</span>
<span id="L724" rel="#L724">724</span>
<span id="L725" rel="#L725">725</span>
<span id="L726" rel="#L726">726</span>
<span id="L727" rel="#L727">727</span>
<span id="L728" rel="#L728">728</span>
<span id="L729" rel="#L729">729</span>
<span id="L730" rel="#L730">730</span>
<span id="L731" rel="#L731">731</span>
<span id="L732" rel="#L732">732</span>
<span id="L733" rel="#L733">733</span>
<span id="L734" rel="#L734">734</span>
<span id="L735" rel="#L735">735</span>
<span id="L736" rel="#L736">736</span>
<span id="L737" rel="#L737">737</span>
<span id="L738" rel="#L738">738</span>
<span id="L739" rel="#L739">739</span>
<span id="L740" rel="#L740">740</span>
<span id="L741" rel="#L741">741</span>
<span id="L742" rel="#L742">742</span>
<span id="L743" rel="#L743">743</span>
<span id="L744" rel="#L744">744</span>
<span id="L745" rel="#L745">745</span>
<span id="L746" rel="#L746">746</span>
<span id="L747" rel="#L747">747</span>
<span id="L748" rel="#L748">748</span>
<span id="L749" rel="#L749">749</span>
<span id="L750" rel="#L750">750</span>
<span id="L751" rel="#L751">751</span>
<span id="L752" rel="#L752">752</span>
<span id="L753" rel="#L753">753</span>
<span id="L754" rel="#L754">754</span>
<span id="L755" rel="#L755">755</span>
<span id="L756" rel="#L756">756</span>
<span id="L757" rel="#L757">757</span>
<span id="L758" rel="#L758">758</span>
<span id="L759" rel="#L759">759</span>
<span id="L760" rel="#L760">760</span>
<span id="L761" rel="#L761">761</span>
<span id="L762" rel="#L762">762</span>
<span id="L763" rel="#L763">763</span>
<span id="L764" rel="#L764">764</span>
<span id="L765" rel="#L765">765</span>
<span id="L766" rel="#L766">766</span>
<span id="L767" rel="#L767">767</span>
<span id="L768" rel="#L768">768</span>
<span id="L769" rel="#L769">769</span>
<span id="L770" rel="#L770">770</span>
<span id="L771" rel="#L771">771</span>
<span id="L772" rel="#L772">772</span>
<span id="L773" rel="#L773">773</span>
<span id="L774" rel="#L774">774</span>
<span id="L775" rel="#L775">775</span>
<span id="L776" rel="#L776">776</span>
<span id="L777" rel="#L777">777</span>
<span id="L778" rel="#L778">778</span>
<span id="L779" rel="#L779">779</span>
<span id="L780" rel="#L780">780</span>
<span id="L781" rel="#L781">781</span>
<span id="L782" rel="#L782">782</span>
<span id="L783" rel="#L783">783</span>
<span id="L784" rel="#L784">784</span>
<span id="L785" rel="#L785">785</span>
<span id="L786" rel="#L786">786</span>
<span id="L787" rel="#L787">787</span>
<span id="L788" rel="#L788">788</span>
<span id="L789" rel="#L789">789</span>
<span id="L790" rel="#L790">790</span>
<span id="L791" rel="#L791">791</span>
<span id="L792" rel="#L792">792</span>
<span id="L793" rel="#L793">793</span>
<span id="L794" rel="#L794">794</span>
<span id="L795" rel="#L795">795</span>
<span id="L796" rel="#L796">796</span>
<span id="L797" rel="#L797">797</span>
<span id="L798" rel="#L798">798</span>
<span id="L799" rel="#L799">799</span>
<span id="L800" rel="#L800">800</span>
<span id="L801" rel="#L801">801</span>
<span id="L802" rel="#L802">802</span>
<span id="L803" rel="#L803">803</span>
<span id="L804" rel="#L804">804</span>
<span id="L805" rel="#L805">805</span>
<span id="L806" rel="#L806">806</span>
<span id="L807" rel="#L807">807</span>
<span id="L808" rel="#L808">808</span>
<span id="L809" rel="#L809">809</span>
<span id="L810" rel="#L810">810</span>
<span id="L811" rel="#L811">811</span>
<span id="L812" rel="#L812">812</span>
<span id="L813" rel="#L813">813</span>
<span id="L814" rel="#L814">814</span>
<span id="L815" rel="#L815">815</span>
<span id="L816" rel="#L816">816</span>
<span id="L817" rel="#L817">817</span>
<span id="L818" rel="#L818">818</span>
<span id="L819" rel="#L819">819</span>
<span id="L820" rel="#L820">820</span>
<span id="L821" rel="#L821">821</span>
<span id="L822" rel="#L822">822</span>
<span id="L823" rel="#L823">823</span>
<span id="L824" rel="#L824">824</span>
<span id="L825" rel="#L825">825</span>
<span id="L826" rel="#L826">826</span>
<span id="L827" rel="#L827">827</span>
<span id="L828" rel="#L828">828</span>
<span id="L829" rel="#L829">829</span>
<span id="L830" rel="#L830">830</span>
<span id="L831" rel="#L831">831</span>
<span id="L832" rel="#L832">832</span>
<span id="L833" rel="#L833">833</span>
<span id="L834" rel="#L834">834</span>
<span id="L835" rel="#L835">835</span>
<span id="L836" rel="#L836">836</span>
<span id="L837" rel="#L837">837</span>
<span id="L838" rel="#L838">838</span>
<span id="L839" rel="#L839">839</span>
<span id="L840" rel="#L840">840</span>
<span id="L841" rel="#L841">841</span>
<span id="L842" rel="#L842">842</span>
<span id="L843" rel="#L843">843</span>
<span id="L844" rel="#L844">844</span>
<span id="L845" rel="#L845">845</span>
<span id="L846" rel="#L846">846</span>
<span id="L847" rel="#L847">847</span>
<span id="L848" rel="#L848">848</span>
<span id="L849" rel="#L849">849</span>
<span id="L850" rel="#L850">850</span>
<span id="L851" rel="#L851">851</span>
<span id="L852" rel="#L852">852</span>
<span id="L853" rel="#L853">853</span>
<span id="L854" rel="#L854">854</span>
<span id="L855" rel="#L855">855</span>
<span id="L856" rel="#L856">856</span>
<span id="L857" rel="#L857">857</span>
<span id="L858" rel="#L858">858</span>
<span id="L859" rel="#L859">859</span>
<span id="L860" rel="#L860">860</span>
<span id="L861" rel="#L861">861</span>
<span id="L862" rel="#L862">862</span>
<span id="L863" rel="#L863">863</span>
<span id="L864" rel="#L864">864</span>
<span id="L865" rel="#L865">865</span>
<span id="L866" rel="#L866">866</span>
<span id="L867" rel="#L867">867</span>
<span id="L868" rel="#L868">868</span>
<span id="L869" rel="#L869">869</span>
<span id="L870" rel="#L870">870</span>
<span id="L871" rel="#L871">871</span>
<span id="L872" rel="#L872">872</span>
<span id="L873" rel="#L873">873</span>
<span id="L874" rel="#L874">874</span>
<span id="L875" rel="#L875">875</span>
<span id="L876" rel="#L876">876</span>
<span id="L877" rel="#L877">877</span>
<span id="L878" rel="#L878">878</span>
<span id="L879" rel="#L879">879</span>
<span id="L880" rel="#L880">880</span>
<span id="L881" rel="#L881">881</span>
<span id="L882" rel="#L882">882</span>
<span id="L883" rel="#L883">883</span>
<span id="L884" rel="#L884">884</span>
<span id="L885" rel="#L885">885</span>
<span id="L886" rel="#L886">886</span>
<span id="L887" rel="#L887">887</span>
<span id="L888" rel="#L888">888</span>
<span id="L889" rel="#L889">889</span>
<span id="L890" rel="#L890">890</span>
<span id="L891" rel="#L891">891</span>
<span id="L892" rel="#L892">892</span>
<span id="L893" rel="#L893">893</span>
<span id="L894" rel="#L894">894</span>
<span id="L895" rel="#L895">895</span>
<span id="L896" rel="#L896">896</span>
<span id="L897" rel="#L897">897</span>
<span id="L898" rel="#L898">898</span>
<span id="L899" rel="#L899">899</span>
<span id="L900" rel="#L900">900</span>
<span id="L901" rel="#L901">901</span>
<span id="L902" rel="#L902">902</span>
<span id="L903" rel="#L903">903</span>
<span id="L904" rel="#L904">904</span>
<span id="L905" rel="#L905">905</span>
<span id="L906" rel="#L906">906</span>
<span id="L907" rel="#L907">907</span>
<span id="L908" rel="#L908">908</span>
<span id="L909" rel="#L909">909</span>
<span id="L910" rel="#L910">910</span>
<span id="L911" rel="#L911">911</span>
<span id="L912" rel="#L912">912</span>
<span id="L913" rel="#L913">913</span>
<span id="L914" rel="#L914">914</span>
<span id="L915" rel="#L915">915</span>
<span id="L916" rel="#L916">916</span>
<span id="L917" rel="#L917">917</span>
<span id="L918" rel="#L918">918</span>
<span id="L919" rel="#L919">919</span>
<span id="L920" rel="#L920">920</span>
<span id="L921" rel="#L921">921</span>
<span id="L922" rel="#L922">922</span>
<span id="L923" rel="#L923">923</span>
<span id="L924" rel="#L924">924</span>
<span id="L925" rel="#L925">925</span>
<span id="L926" rel="#L926">926</span>
<span id="L927" rel="#L927">927</span>
<span id="L928" rel="#L928">928</span>
<span id="L929" rel="#L929">929</span>
<span id="L930" rel="#L930">930</span>
<span id="L931" rel="#L931">931</span>
<span id="L932" rel="#L932">932</span>
<span id="L933" rel="#L933">933</span>
<span id="L934" rel="#L934">934</span>
<span id="L935" rel="#L935">935</span>
<span id="L936" rel="#L936">936</span>
<span id="L937" rel="#L937">937</span>
<span id="L938" rel="#L938">938</span>
<span id="L939" rel="#L939">939</span>
<span id="L940" rel="#L940">940</span>
<span id="L941" rel="#L941">941</span>
<span id="L942" rel="#L942">942</span>
<span id="L943" rel="#L943">943</span>
<span id="L944" rel="#L944">944</span>
<span id="L945" rel="#L945">945</span>
<span id="L946" rel="#L946">946</span>
<span id="L947" rel="#L947">947</span>
<span id="L948" rel="#L948">948</span>
<span id="L949" rel="#L949">949</span>
<span id="L950" rel="#L950">950</span>
<span id="L951" rel="#L951">951</span>
<span id="L952" rel="#L952">952</span>
<span id="L953" rel="#L953">953</span>
<span id="L954" rel="#L954">954</span>
<span id="L955" rel="#L955">955</span>
<span id="L956" rel="#L956">956</span>
<span id="L957" rel="#L957">957</span>
<span id="L958" rel="#L958">958</span>
<span id="L959" rel="#L959">959</span>
<span id="L960" rel="#L960">960</span>
<span id="L961" rel="#L961">961</span>
<span id="L962" rel="#L962">962</span>
<span id="L963" rel="#L963">963</span>
<span id="L964" rel="#L964">964</span>
<span id="L965" rel="#L965">965</span>
<span id="L966" rel="#L966">966</span>
<span id="L967" rel="#L967">967</span>
<span id="L968" rel="#L968">968</span>
<span id="L969" rel="#L969">969</span>
<span id="L970" rel="#L970">970</span>
<span id="L971" rel="#L971">971</span>
<span id="L972" rel="#L972">972</span>
<span id="L973" rel="#L973">973</span>
<span id="L974" rel="#L974">974</span>
<span id="L975" rel="#L975">975</span>
<span id="L976" rel="#L976">976</span>
<span id="L977" rel="#L977">977</span>
<span id="L978" rel="#L978">978</span>
<span id="L979" rel="#L979">979</span>
<span id="L980" rel="#L980">980</span>
<span id="L981" rel="#L981">981</span>
<span id="L982" rel="#L982">982</span>
<span id="L983" rel="#L983">983</span>
<span id="L984" rel="#L984">984</span>
<span id="L985" rel="#L985">985</span>
<span id="L986" rel="#L986">986</span>
<span id="L987" rel="#L987">987</span>
<span id="L988" rel="#L988">988</span>
<span id="L989" rel="#L989">989</span>
<span id="L990" rel="#L990">990</span>
<span id="L991" rel="#L991">991</span>
<span id="L992" rel="#L992">992</span>
<span id="L993" rel="#L993">993</span>
<span id="L994" rel="#L994">994</span>
<span id="L995" rel="#L995">995</span>
<span id="L996" rel="#L996">996</span>
<span id="L997" rel="#L997">997</span>
<span id="L998" rel="#L998">998</span>
<span id="L999" rel="#L999">999</span>
<span id="L1000" rel="#L1000">1000</span>
<span id="L1001" rel="#L1001">1001</span>
<span id="L1002" rel="#L1002">1002</span>
<span id="L1003" rel="#L1003">1003</span>
<span id="L1004" rel="#L1004">1004</span>
<span id="L1005" rel="#L1005">1005</span>
<span id="L1006" rel="#L1006">1006</span>
<span id="L1007" rel="#L1007">1007</span>
<span id="L1008" rel="#L1008">1008</span>
<span id="L1009" rel="#L1009">1009</span>
<span id="L1010" rel="#L1010">1010</span>
<span id="L1011" rel="#L1011">1011</span>
<span id="L1012" rel="#L1012">1012</span>
<span id="L1013" rel="#L1013">1013</span>
<span id="L1014" rel="#L1014">1014</span>
<span id="L1015" rel="#L1015">1015</span>
<span id="L1016" rel="#L1016">1016</span>
<span id="L1017" rel="#L1017">1017</span>
<span id="L1018" rel="#L1018">1018</span>
<span id="L1019" rel="#L1019">1019</span>
<span id="L1020" rel="#L1020">1020</span>
<span id="L1021" rel="#L1021">1021</span>
<span id="L1022" rel="#L1022">1022</span>
<span id="L1023" rel="#L1023">1023</span>
<span id="L1024" rel="#L1024">1024</span>
<span id="L1025" rel="#L1025">1025</span>
<span id="L1026" rel="#L1026">1026</span>
<span id="L1027" rel="#L1027">1027</span>
<span id="L1028" rel="#L1028">1028</span>
<span id="L1029" rel="#L1029">1029</span>
<span id="L1030" rel="#L1030">1030</span>
<span id="L1031" rel="#L1031">1031</span>
<span id="L1032" rel="#L1032">1032</span>
<span id="L1033" rel="#L1033">1033</span>
<span id="L1034" rel="#L1034">1034</span>
<span id="L1035" rel="#L1035">1035</span>
<span id="L1036" rel="#L1036">1036</span>
<span id="L1037" rel="#L1037">1037</span>
<span id="L1038" rel="#L1038">1038</span>
<span id="L1039" rel="#L1039">1039</span>
<span id="L1040" rel="#L1040">1040</span>
<span id="L1041" rel="#L1041">1041</span>
<span id="L1042" rel="#L1042">1042</span>
<span id="L1043" rel="#L1043">1043</span>
<span id="L1044" rel="#L1044">1044</span>
<span id="L1045" rel="#L1045">1045</span>
<span id="L1046" rel="#L1046">1046</span>
<span id="L1047" rel="#L1047">1047</span>
<span id="L1048" rel="#L1048">1048</span>
<span id="L1049" rel="#L1049">1049</span>
<span id="L1050" rel="#L1050">1050</span>
<span id="L1051" rel="#L1051">1051</span>
<span id="L1052" rel="#L1052">1052</span>
<span id="L1053" rel="#L1053">1053</span>
<span id="L1054" rel="#L1054">1054</span>
<span id="L1055" rel="#L1055">1055</span>
<span id="L1056" rel="#L1056">1056</span>
<span id="L1057" rel="#L1057">1057</span>
<span id="L1058" rel="#L1058">1058</span>
<span id="L1059" rel="#L1059">1059</span>
<span id="L1060" rel="#L1060">1060</span>
<span id="L1061" rel="#L1061">1061</span>
<span id="L1062" rel="#L1062">1062</span>
<span id="L1063" rel="#L1063">1063</span>
<span id="L1064" rel="#L1064">1064</span>
<span id="L1065" rel="#L1065">1065</span>
<span id="L1066" rel="#L1066">1066</span>
<span id="L1067" rel="#L1067">1067</span>
<span id="L1068" rel="#L1068">1068</span>
<span id="L1069" rel="#L1069">1069</span>
<span id="L1070" rel="#L1070">1070</span>
<span id="L1071" rel="#L1071">1071</span>
<span id="L1072" rel="#L1072">1072</span>
<span id="L1073" rel="#L1073">1073</span>
<span id="L1074" rel="#L1074">1074</span>
<span id="L1075" rel="#L1075">1075</span>
<span id="L1076" rel="#L1076">1076</span>
<span id="L1077" rel="#L1077">1077</span>
<span id="L1078" rel="#L1078">1078</span>
<span id="L1079" rel="#L1079">1079</span>
<span id="L1080" rel="#L1080">1080</span>
<span id="L1081" rel="#L1081">1081</span>
<span id="L1082" rel="#L1082">1082</span>
<span id="L1083" rel="#L1083">1083</span>
<span id="L1084" rel="#L1084">1084</span>
<span id="L1085" rel="#L1085">1085</span>
<span id="L1086" rel="#L1086">1086</span>
<span id="L1087" rel="#L1087">1087</span>
<span id="L1088" rel="#L1088">1088</span>
<span id="L1089" rel="#L1089">1089</span>
<span id="L1090" rel="#L1090">1090</span>
<span id="L1091" rel="#L1091">1091</span>
<span id="L1092" rel="#L1092">1092</span>
<span id="L1093" rel="#L1093">1093</span>
<span id="L1094" rel="#L1094">1094</span>
<span id="L1095" rel="#L1095">1095</span>
<span id="L1096" rel="#L1096">1096</span>
<span id="L1097" rel="#L1097">1097</span>
<span id="L1098" rel="#L1098">1098</span>
<span id="L1099" rel="#L1099">1099</span>
<span id="L1100" rel="#L1100">1100</span>
<span id="L1101" rel="#L1101">1101</span>
<span id="L1102" rel="#L1102">1102</span>
<span id="L1103" rel="#L1103">1103</span>
<span id="L1104" rel="#L1104">1104</span>
<span id="L1105" rel="#L1105">1105</span>
<span id="L1106" rel="#L1106">1106</span>
<span id="L1107" rel="#L1107">1107</span>
<span id="L1108" rel="#L1108">1108</span>
<span id="L1109" rel="#L1109">1109</span>
<span id="L1110" rel="#L1110">1110</span>
<span id="L1111" rel="#L1111">1111</span>
<span id="L1112" rel="#L1112">1112</span>
<span id="L1113" rel="#L1113">1113</span>
<span id="L1114" rel="#L1114">1114</span>
<span id="L1115" rel="#L1115">1115</span>
<span id="L1116" rel="#L1116">1116</span>
<span id="L1117" rel="#L1117">1117</span>
<span id="L1118" rel="#L1118">1118</span>
<span id="L1119" rel="#L1119">1119</span>
<span id="L1120" rel="#L1120">1120</span>
<span id="L1121" rel="#L1121">1121</span>
<span id="L1122" rel="#L1122">1122</span>
<span id="L1123" rel="#L1123">1123</span>
<span id="L1124" rel="#L1124">1124</span>
<span id="L1125" rel="#L1125">1125</span>
<span id="L1126" rel="#L1126">1126</span>
<span id="L1127" rel="#L1127">1127</span>
<span id="L1128" rel="#L1128">1128</span>
<span id="L1129" rel="#L1129">1129</span>
<span id="L1130" rel="#L1130">1130</span>
<span id="L1131" rel="#L1131">1131</span>
<span id="L1132" rel="#L1132">1132</span>
<span id="L1133" rel="#L1133">1133</span>
<span id="L1134" rel="#L1134">1134</span>
<span id="L1135" rel="#L1135">1135</span>
<span id="L1136" rel="#L1136">1136</span>
<span id="L1137" rel="#L1137">1137</span>
<span id="L1138" rel="#L1138">1138</span>
<span id="L1139" rel="#L1139">1139</span>
<span id="L1140" rel="#L1140">1140</span>
<span id="L1141" rel="#L1141">1141</span>
<span id="L1142" rel="#L1142">1142</span>
<span id="L1143" rel="#L1143">1143</span>
<span id="L1144" rel="#L1144">1144</span>
<span id="L1145" rel="#L1145">1145</span>
<span id="L1146" rel="#L1146">1146</span>
<span id="L1147" rel="#L1147">1147</span>
<span id="L1148" rel="#L1148">1148</span>
<span id="L1149" rel="#L1149">1149</span>
<span id="L1150" rel="#L1150">1150</span>
<span id="L1151" rel="#L1151">1151</span>
<span id="L1152" rel="#L1152">1152</span>
<span id="L1153" rel="#L1153">1153</span>
<span id="L1154" rel="#L1154">1154</span>
<span id="L1155" rel="#L1155">1155</span>
<span id="L1156" rel="#L1156">1156</span>
<span id="L1157" rel="#L1157">1157</span>
<span id="L1158" rel="#L1158">1158</span>
<span id="L1159" rel="#L1159">1159</span>
<span id="L1160" rel="#L1160">1160</span>
<span id="L1161" rel="#L1161">1161</span>
<span id="L1162" rel="#L1162">1162</span>
<span id="L1163" rel="#L1163">1163</span>
<span id="L1164" rel="#L1164">1164</span>
<span id="L1165" rel="#L1165">1165</span>
<span id="L1166" rel="#L1166">1166</span>
<span id="L1167" rel="#L1167">1167</span>
<span id="L1168" rel="#L1168">1168</span>
<span id="L1169" rel="#L1169">1169</span>
<span id="L1170" rel="#L1170">1170</span>
<span id="L1171" rel="#L1171">1171</span>
<span id="L1172" rel="#L1172">1172</span>
<span id="L1173" rel="#L1173">1173</span>
<span id="L1174" rel="#L1174">1174</span>
<span id="L1175" rel="#L1175">1175</span>
<span id="L1176" rel="#L1176">1176</span>
<span id="L1177" rel="#L1177">1177</span>
<span id="L1178" rel="#L1178">1178</span>
<span id="L1179" rel="#L1179">1179</span>
<span id="L1180" rel="#L1180">1180</span>
<span id="L1181" rel="#L1181">1181</span>
<span id="L1182" rel="#L1182">1182</span>
<span id="L1183" rel="#L1183">1183</span>
<span id="L1184" rel="#L1184">1184</span>
<span id="L1185" rel="#L1185">1185</span>
<span id="L1186" rel="#L1186">1186</span>
<span id="L1187" rel="#L1187">1187</span>
<span id="L1188" rel="#L1188">1188</span>
<span id="L1189" rel="#L1189">1189</span>
<span id="L1190" rel="#L1190">1190</span>
<span id="L1191" rel="#L1191">1191</span>
<span id="L1192" rel="#L1192">1192</span>
<span id="L1193" rel="#L1193">1193</span>
<span id="L1194" rel="#L1194">1194</span>
<span id="L1195" rel="#L1195">1195</span>
<span id="L1196" rel="#L1196">1196</span>
<span id="L1197" rel="#L1197">1197</span>
<span id="L1198" rel="#L1198">1198</span>
<span id="L1199" rel="#L1199">1199</span>
<span id="L1200" rel="#L1200">1200</span>
<span id="L1201" rel="#L1201">1201</span>
<span id="L1202" rel="#L1202">1202</span>
<span id="L1203" rel="#L1203">1203</span>
<span id="L1204" rel="#L1204">1204</span>
<span id="L1205" rel="#L1205">1205</span>
<span id="L1206" rel="#L1206">1206</span>
<span id="L1207" rel="#L1207">1207</span>
<span id="L1208" rel="#L1208">1208</span>
<span id="L1209" rel="#L1209">1209</span>
<span id="L1210" rel="#L1210">1210</span>
<span id="L1211" rel="#L1211">1211</span>
<span id="L1212" rel="#L1212">1212</span>
<span id="L1213" rel="#L1213">1213</span>
<span id="L1214" rel="#L1214">1214</span>
<span id="L1215" rel="#L1215">1215</span>
<span id="L1216" rel="#L1216">1216</span>
<span id="L1217" rel="#L1217">1217</span>
<span id="L1218" rel="#L1218">1218</span>
<span id="L1219" rel="#L1219">1219</span>
<span id="L1220" rel="#L1220">1220</span>
<span id="L1221" rel="#L1221">1221</span>
<span id="L1222" rel="#L1222">1222</span>
<span id="L1223" rel="#L1223">1223</span>
<span id="L1224" rel="#L1224">1224</span>
<span id="L1225" rel="#L1225">1225</span>
<span id="L1226" rel="#L1226">1226</span>
<span id="L1227" rel="#L1227">1227</span>
<span id="L1228" rel="#L1228">1228</span>
<span id="L1229" rel="#L1229">1229</span>
<span id="L1230" rel="#L1230">1230</span>
<span id="L1231" rel="#L1231">1231</span>
<span id="L1232" rel="#L1232">1232</span>
<span id="L1233" rel="#L1233">1233</span>
<span id="L1234" rel="#L1234">1234</span>
<span id="L1235" rel="#L1235">1235</span>
<span id="L1236" rel="#L1236">1236</span>
<span id="L1237" rel="#L1237">1237</span>
<span id="L1238" rel="#L1238">1238</span>
<span id="L1239" rel="#L1239">1239</span>
<span id="L1240" rel="#L1240">1240</span>
<span id="L1241" rel="#L1241">1241</span>
<span id="L1242" rel="#L1242">1242</span>
<span id="L1243" rel="#L1243">1243</span>
<span id="L1244" rel="#L1244">1244</span>
<span id="L1245" rel="#L1245">1245</span>
<span id="L1246" rel="#L1246">1246</span>
<span id="L1247" rel="#L1247">1247</span>
<span id="L1248" rel="#L1248">1248</span>
<span id="L1249" rel="#L1249">1249</span>
<span id="L1250" rel="#L1250">1250</span>
<span id="L1251" rel="#L1251">1251</span>
<span id="L1252" rel="#L1252">1252</span>
<span id="L1253" rel="#L1253">1253</span>
<span id="L1254" rel="#L1254">1254</span>
<span id="L1255" rel="#L1255">1255</span>
<span id="L1256" rel="#L1256">1256</span>
<span id="L1257" rel="#L1257">1257</span>
<span id="L1258" rel="#L1258">1258</span>
<span id="L1259" rel="#L1259">1259</span>
<span id="L1260" rel="#L1260">1260</span>
<span id="L1261" rel="#L1261">1261</span>
<span id="L1262" rel="#L1262">1262</span>
<span id="L1263" rel="#L1263">1263</span>
<span id="L1264" rel="#L1264">1264</span>
<span id="L1265" rel="#L1265">1265</span>
<span id="L1266" rel="#L1266">1266</span>
<span id="L1267" rel="#L1267">1267</span>
<span id="L1268" rel="#L1268">1268</span>
<span id="L1269" rel="#L1269">1269</span>
<span id="L1270" rel="#L1270">1270</span>
<span id="L1271" rel="#L1271">1271</span>
<span id="L1272" rel="#L1272">1272</span>
<span id="L1273" rel="#L1273">1273</span>
<span id="L1274" rel="#L1274">1274</span>
<span id="L1275" rel="#L1275">1275</span>
<span id="L1276" rel="#L1276">1276</span>
<span id="L1277" rel="#L1277">1277</span>
<span id="L1278" rel="#L1278">1278</span>
<span id="L1279" rel="#L1279">1279</span>
<span id="L1280" rel="#L1280">1280</span>
<span id="L1281" rel="#L1281">1281</span>
<span id="L1282" rel="#L1282">1282</span>
<span id="L1283" rel="#L1283">1283</span>
<span id="L1284" rel="#L1284">1284</span>
<span id="L1285" rel="#L1285">1285</span>
<span id="L1286" rel="#L1286">1286</span>
<span id="L1287" rel="#L1287">1287</span>
<span id="L1288" rel="#L1288">1288</span>
<span id="L1289" rel="#L1289">1289</span>
<span id="L1290" rel="#L1290">1290</span>
<span id="L1291" rel="#L1291">1291</span>
<span id="L1292" rel="#L1292">1292</span>
<span id="L1293" rel="#L1293">1293</span>
<span id="L1294" rel="#L1294">1294</span>
<span id="L1295" rel="#L1295">1295</span>
<span id="L1296" rel="#L1296">1296</span>
<span id="L1297" rel="#L1297">1297</span>
<span id="L1298" rel="#L1298">1298</span>
<span id="L1299" rel="#L1299">1299</span>
<span id="L1300" rel="#L1300">1300</span>
<span id="L1301" rel="#L1301">1301</span>
<span id="L1302" rel="#L1302">1302</span>
<span id="L1303" rel="#L1303">1303</span>
<span id="L1304" rel="#L1304">1304</span>
<span id="L1305" rel="#L1305">1305</span>
<span id="L1306" rel="#L1306">1306</span>
<span id="L1307" rel="#L1307">1307</span>
<span id="L1308" rel="#L1308">1308</span>
<span id="L1309" rel="#L1309">1309</span>
<span id="L1310" rel="#L1310">1310</span>
<span id="L1311" rel="#L1311">1311</span>
<span id="L1312" rel="#L1312">1312</span>
<span id="L1313" rel="#L1313">1313</span>
<span id="L1314" rel="#L1314">1314</span>
<span id="L1315" rel="#L1315">1315</span>
<span id="L1316" rel="#L1316">1316</span>
<span id="L1317" rel="#L1317">1317</span>
<span id="L1318" rel="#L1318">1318</span>
<span id="L1319" rel="#L1319">1319</span>
<span id="L1320" rel="#L1320">1320</span>
<span id="L1321" rel="#L1321">1321</span>
<span id="L1322" rel="#L1322">1322</span>
<span id="L1323" rel="#L1323">1323</span>
<span id="L1324" rel="#L1324">1324</span>
<span id="L1325" rel="#L1325">1325</span>
<span id="L1326" rel="#L1326">1326</span>
<span id="L1327" rel="#L1327">1327</span>
<span id="L1328" rel="#L1328">1328</span>
<span id="L1329" rel="#L1329">1329</span>
<span id="L1330" rel="#L1330">1330</span>
<span id="L1331" rel="#L1331">1331</span>
<span id="L1332" rel="#L1332">1332</span>
<span id="L1333" rel="#L1333">1333</span>
<span id="L1334" rel="#L1334">1334</span>
<span id="L1335" rel="#L1335">1335</span>
<span id="L1336" rel="#L1336">1336</span>
<span id="L1337" rel="#L1337">1337</span>
<span id="L1338" rel="#L1338">1338</span>
<span id="L1339" rel="#L1339">1339</span>
<span id="L1340" rel="#L1340">1340</span>
<span id="L1341" rel="#L1341">1341</span>
<span id="L1342" rel="#L1342">1342</span>
<span id="L1343" rel="#L1343">1343</span>
<span id="L1344" rel="#L1344">1344</span>
<span id="L1345" rel="#L1345">1345</span>
<span id="L1346" rel="#L1346">1346</span>
<span id="L1347" rel="#L1347">1347</span>
<span id="L1348" rel="#L1348">1348</span>
<span id="L1349" rel="#L1349">1349</span>
<span id="L1350" rel="#L1350">1350</span>
<span id="L1351" rel="#L1351">1351</span>
<span id="L1352" rel="#L1352">1352</span>
<span id="L1353" rel="#L1353">1353</span>
<span id="L1354" rel="#L1354">1354</span>
<span id="L1355" rel="#L1355">1355</span>
<span id="L1356" rel="#L1356">1356</span>
<span id="L1357" rel="#L1357">1357</span>
<span id="L1358" rel="#L1358">1358</span>
<span id="L1359" rel="#L1359">1359</span>
<span id="L1360" rel="#L1360">1360</span>
<span id="L1361" rel="#L1361">1361</span>
<span id="L1362" rel="#L1362">1362</span>
<span id="L1363" rel="#L1363">1363</span>
<span id="L1364" rel="#L1364">1364</span>
<span id="L1365" rel="#L1365">1365</span>
<span id="L1366" rel="#L1366">1366</span>
<span id="L1367" rel="#L1367">1367</span>
<span id="L1368" rel="#L1368">1368</span>
<span id="L1369" rel="#L1369">1369</span>
<span id="L1370" rel="#L1370">1370</span>
<span id="L1371" rel="#L1371">1371</span>
<span id="L1372" rel="#L1372">1372</span>
<span id="L1373" rel="#L1373">1373</span>
<span id="L1374" rel="#L1374">1374</span>
<span id="L1375" rel="#L1375">1375</span>
<span id="L1376" rel="#L1376">1376</span>
<span id="L1377" rel="#L1377">1377</span>
<span id="L1378" rel="#L1378">1378</span>
<span id="L1379" rel="#L1379">1379</span>
<span id="L1380" rel="#L1380">1380</span>
<span id="L1381" rel="#L1381">1381</span>
<span id="L1382" rel="#L1382">1382</span>
<span id="L1383" rel="#L1383">1383</span>
<span id="L1384" rel="#L1384">1384</span>
<span id="L1385" rel="#L1385">1385</span>
<span id="L1386" rel="#L1386">1386</span>
<span id="L1387" rel="#L1387">1387</span>
<span id="L1388" rel="#L1388">1388</span>
<span id="L1389" rel="#L1389">1389</span>
<span id="L1390" rel="#L1390">1390</span>
<span id="L1391" rel="#L1391">1391</span>
<span id="L1392" rel="#L1392">1392</span>
<span id="L1393" rel="#L1393">1393</span>
<span id="L1394" rel="#L1394">1394</span>
<span id="L1395" rel="#L1395">1395</span>
<span id="L1396" rel="#L1396">1396</span>
<span id="L1397" rel="#L1397">1397</span>
<span id="L1398" rel="#L1398">1398</span>
<span id="L1399" rel="#L1399">1399</span>
<span id="L1400" rel="#L1400">1400</span>
<span id="L1401" rel="#L1401">1401</span>
<span id="L1402" rel="#L1402">1402</span>
<span id="L1403" rel="#L1403">1403</span>
<span id="L1404" rel="#L1404">1404</span>
<span id="L1405" rel="#L1405">1405</span>
<span id="L1406" rel="#L1406">1406</span>
<span id="L1407" rel="#L1407">1407</span>
<span id="L1408" rel="#L1408">1408</span>
<span id="L1409" rel="#L1409">1409</span>
<span id="L1410" rel="#L1410">1410</span>
<span id="L1411" rel="#L1411">1411</span>
<span id="L1412" rel="#L1412">1412</span>
<span id="L1413" rel="#L1413">1413</span>
<span id="L1414" rel="#L1414">1414</span>
<span id="L1415" rel="#L1415">1415</span>
<span id="L1416" rel="#L1416">1416</span>
<span id="L1417" rel="#L1417">1417</span>
<span id="L1418" rel="#L1418">1418</span>
<span id="L1419" rel="#L1419">1419</span>
<span id="L1420" rel="#L1420">1420</span>
<span id="L1421" rel="#L1421">1421</span>
<span id="L1422" rel="#L1422">1422</span>
<span id="L1423" rel="#L1423">1423</span>
<span id="L1424" rel="#L1424">1424</span>
<span id="L1425" rel="#L1425">1425</span>
<span id="L1426" rel="#L1426">1426</span>
<span id="L1427" rel="#L1427">1427</span>
<span id="L1428" rel="#L1428">1428</span>
<span id="L1429" rel="#L1429">1429</span>
<span id="L1430" rel="#L1430">1430</span>
<span id="L1431" rel="#L1431">1431</span>
<span id="L1432" rel="#L1432">1432</span>
<span id="L1433" rel="#L1433">1433</span>
<span id="L1434" rel="#L1434">1434</span>
<span id="L1435" rel="#L1435">1435</span>
<span id="L1436" rel="#L1436">1436</span>
<span id="L1437" rel="#L1437">1437</span>
<span id="L1438" rel="#L1438">1438</span>
<span id="L1439" rel="#L1439">1439</span>
<span id="L1440" rel="#L1440">1440</span>
<span id="L1441" rel="#L1441">1441</span>
<span id="L1442" rel="#L1442">1442</span>
<span id="L1443" rel="#L1443">1443</span>
<span id="L1444" rel="#L1444">1444</span>
<span id="L1445" rel="#L1445">1445</span>
<span id="L1446" rel="#L1446">1446</span>
<span id="L1447" rel="#L1447">1447</span>
<span id="L1448" rel="#L1448">1448</span>
<span id="L1449" rel="#L1449">1449</span>
<span id="L1450" rel="#L1450">1450</span>
<span id="L1451" rel="#L1451">1451</span>
<span id="L1452" rel="#L1452">1452</span>
<span id="L1453" rel="#L1453">1453</span>
<span id="L1454" rel="#L1454">1454</span>
<span id="L1455" rel="#L1455">1455</span>
<span id="L1456" rel="#L1456">1456</span>
<span id="L1457" rel="#L1457">1457</span>
<span id="L1458" rel="#L1458">1458</span>
<span id="L1459" rel="#L1459">1459</span>
<span id="L1460" rel="#L1460">1460</span>
<span id="L1461" rel="#L1461">1461</span>
<span id="L1462" rel="#L1462">1462</span>
<span id="L1463" rel="#L1463">1463</span>
<span id="L1464" rel="#L1464">1464</span>
<span id="L1465" rel="#L1465">1465</span>
<span id="L1466" rel="#L1466">1466</span>
<span id="L1467" rel="#L1467">1467</span>
<span id="L1468" rel="#L1468">1468</span>
<span id="L1469" rel="#L1469">1469</span>
<span id="L1470" rel="#L1470">1470</span>
<span id="L1471" rel="#L1471">1471</span>
<span id="L1472" rel="#L1472">1472</span>
<span id="L1473" rel="#L1473">1473</span>
<span id="L1474" rel="#L1474">1474</span>
<span id="L1475" rel="#L1475">1475</span>
<span id="L1476" rel="#L1476">1476</span>
<span id="L1477" rel="#L1477">1477</span>
<span id="L1478" rel="#L1478">1478</span>
<span id="L1479" rel="#L1479">1479</span>
<span id="L1480" rel="#L1480">1480</span>
<span id="L1481" rel="#L1481">1481</span>
<span id="L1482" rel="#L1482">1482</span>
<span id="L1483" rel="#L1483">1483</span>
<span id="L1484" rel="#L1484">1484</span>
<span id="L1485" rel="#L1485">1485</span>
<span id="L1486" rel="#L1486">1486</span>
<span id="L1487" rel="#L1487">1487</span>
<span id="L1488" rel="#L1488">1488</span>
<span id="L1489" rel="#L1489">1489</span>
<span id="L1490" rel="#L1490">1490</span>
<span id="L1491" rel="#L1491">1491</span>
<span id="L1492" rel="#L1492">1492</span>
<span id="L1493" rel="#L1493">1493</span>
<span id="L1494" rel="#L1494">1494</span>
<span id="L1495" rel="#L1495">1495</span>
<span id="L1496" rel="#L1496">1496</span>
<span id="L1497" rel="#L1497">1497</span>
<span id="L1498" rel="#L1498">1498</span>
<span id="L1499" rel="#L1499">1499</span>
<span id="L1500" rel="#L1500">1500</span>
<span id="L1501" rel="#L1501">1501</span>
<span id="L1502" rel="#L1502">1502</span>
<span id="L1503" rel="#L1503">1503</span>
<span id="L1504" rel="#L1504">1504</span>
<span id="L1505" rel="#L1505">1505</span>
<span id="L1506" rel="#L1506">1506</span>
<span id="L1507" rel="#L1507">1507</span>
<span id="L1508" rel="#L1508">1508</span>
<span id="L1509" rel="#L1509">1509</span>
<span id="L1510" rel="#L1510">1510</span>
<span id="L1511" rel="#L1511">1511</span>
<span id="L1512" rel="#L1512">1512</span>
<span id="L1513" rel="#L1513">1513</span>
<span id="L1514" rel="#L1514">1514</span>
<span id="L1515" rel="#L1515">1515</span>
<span id="L1516" rel="#L1516">1516</span>
<span id="L1517" rel="#L1517">1517</span>
<span id="L1518" rel="#L1518">1518</span>
<span id="L1519" rel="#L1519">1519</span>
<span id="L1520" rel="#L1520">1520</span>
<span id="L1521" rel="#L1521">1521</span>
<span id="L1522" rel="#L1522">1522</span>
<span id="L1523" rel="#L1523">1523</span>
<span id="L1524" rel="#L1524">1524</span>
<span id="L1525" rel="#L1525">1525</span>
<span id="L1526" rel="#L1526">1526</span>
<span id="L1527" rel="#L1527">1527</span>
<span id="L1528" rel="#L1528">1528</span>
<span id="L1529" rel="#L1529">1529</span>
<span id="L1530" rel="#L1530">1530</span>
<span id="L1531" rel="#L1531">1531</span>
<span id="L1532" rel="#L1532">1532</span>
<span id="L1533" rel="#L1533">1533</span>
<span id="L1534" rel="#L1534">1534</span>
<span id="L1535" rel="#L1535">1535</span>
<span id="L1536" rel="#L1536">1536</span>
<span id="L1537" rel="#L1537">1537</span>
<span id="L1538" rel="#L1538">1538</span>
<span id="L1539" rel="#L1539">1539</span>
<span id="L1540" rel="#L1540">1540</span>
<span id="L1541" rel="#L1541">1541</span>
<span id="L1542" rel="#L1542">1542</span>
<span id="L1543" rel="#L1543">1543</span>
<span id="L1544" rel="#L1544">1544</span>
<span id="L1545" rel="#L1545">1545</span>
<span id="L1546" rel="#L1546">1546</span>
<span id="L1547" rel="#L1547">1547</span>
<span id="L1548" rel="#L1548">1548</span>
<span id="L1549" rel="#L1549">1549</span>
<span id="L1550" rel="#L1550">1550</span>
<span id="L1551" rel="#L1551">1551</span>
<span id="L1552" rel="#L1552">1552</span>
<span id="L1553" rel="#L1553">1553</span>
<span id="L1554" rel="#L1554">1554</span>
<span id="L1555" rel="#L1555">1555</span>
<span id="L1556" rel="#L1556">1556</span>
<span id="L1557" rel="#L1557">1557</span>
<span id="L1558" rel="#L1558">1558</span>
<span id="L1559" rel="#L1559">1559</span>
<span id="L1560" rel="#L1560">1560</span>
<span id="L1561" rel="#L1561">1561</span>
<span id="L1562" rel="#L1562">1562</span>
<span id="L1563" rel="#L1563">1563</span>
<span id="L1564" rel="#L1564">1564</span>
<span id="L1565" rel="#L1565">1565</span>
<span id="L1566" rel="#L1566">1566</span>
<span id="L1567" rel="#L1567">1567</span>
<span id="L1568" rel="#L1568">1568</span>
<span id="L1569" rel="#L1569">1569</span>
<span id="L1570" rel="#L1570">1570</span>
<span id="L1571" rel="#L1571">1571</span>
<span id="L1572" rel="#L1572">1572</span>
<span id="L1573" rel="#L1573">1573</span>
<span id="L1574" rel="#L1574">1574</span>
<span id="L1575" rel="#L1575">1575</span>
<span id="L1576" rel="#L1576">1576</span>
<span id="L1577" rel="#L1577">1577</span>
<span id="L1578" rel="#L1578">1578</span>
<span id="L1579" rel="#L1579">1579</span>
<span id="L1580" rel="#L1580">1580</span>
<span id="L1581" rel="#L1581">1581</span>
<span id="L1582" rel="#L1582">1582</span>
<span id="L1583" rel="#L1583">1583</span>
<span id="L1584" rel="#L1584">1584</span>
<span id="L1585" rel="#L1585">1585</span>
<span id="L1586" rel="#L1586">1586</span>
<span id="L1587" rel="#L1587">1587</span>
<span id="L1588" rel="#L1588">1588</span>
<span id="L1589" rel="#L1589">1589</span>
<span id="L1590" rel="#L1590">1590</span>
<span id="L1591" rel="#L1591">1591</span>
<span id="L1592" rel="#L1592">1592</span>
<span id="L1593" rel="#L1593">1593</span>
<span id="L1594" rel="#L1594">1594</span>
<span id="L1595" rel="#L1595">1595</span>
<span id="L1596" rel="#L1596">1596</span>
<span id="L1597" rel="#L1597">1597</span>
<span id="L1598" rel="#L1598">1598</span>
<span id="L1599" rel="#L1599">1599</span>
<span id="L1600" rel="#L1600">1600</span>
<span id="L1601" rel="#L1601">1601</span>
<span id="L1602" rel="#L1602">1602</span>
<span id="L1603" rel="#L1603">1603</span>
<span id="L1604" rel="#L1604">1604</span>
<span id="L1605" rel="#L1605">1605</span>
<span id="L1606" rel="#L1606">1606</span>
<span id="L1607" rel="#L1607">1607</span>
<span id="L1608" rel="#L1608">1608</span>
<span id="L1609" rel="#L1609">1609</span>
<span id="L1610" rel="#L1610">1610</span>
<span id="L1611" rel="#L1611">1611</span>
<span id="L1612" rel="#L1612">1612</span>
<span id="L1613" rel="#L1613">1613</span>
<span id="L1614" rel="#L1614">1614</span>
<span id="L1615" rel="#L1615">1615</span>
<span id="L1616" rel="#L1616">1616</span>
<span id="L1617" rel="#L1617">1617</span>
<span id="L1618" rel="#L1618">1618</span>
<span id="L1619" rel="#L1619">1619</span>
<span id="L1620" rel="#L1620">1620</span>
<span id="L1621" rel="#L1621">1621</span>
<span id="L1622" rel="#L1622">1622</span>
<span id="L1623" rel="#L1623">1623</span>
<span id="L1624" rel="#L1624">1624</span>
<span id="L1625" rel="#L1625">1625</span>
<span id="L1626" rel="#L1626">1626</span>
<span id="L1627" rel="#L1627">1627</span>
<span id="L1628" rel="#L1628">1628</span>
<span id="L1629" rel="#L1629">1629</span>
<span id="L1630" rel="#L1630">1630</span>
<span id="L1631" rel="#L1631">1631</span>
<span id="L1632" rel="#L1632">1632</span>
<span id="L1633" rel="#L1633">1633</span>
<span id="L1634" rel="#L1634">1634</span>
<span id="L1635" rel="#L1635">1635</span>
<span id="L1636" rel="#L1636">1636</span>
<span id="L1637" rel="#L1637">1637</span>
<span id="L1638" rel="#L1638">1638</span>
<span id="L1639" rel="#L1639">1639</span>
<span id="L1640" rel="#L1640">1640</span>
<span id="L1641" rel="#L1641">1641</span>
<span id="L1642" rel="#L1642">1642</span>
<span id="L1643" rel="#L1643">1643</span>
<span id="L1644" rel="#L1644">1644</span>
<span id="L1645" rel="#L1645">1645</span>
<span id="L1646" rel="#L1646">1646</span>
<span id="L1647" rel="#L1647">1647</span>
<span id="L1648" rel="#L1648">1648</span>
<span id="L1649" rel="#L1649">1649</span>
<span id="L1650" rel="#L1650">1650</span>
<span id="L1651" rel="#L1651">1651</span>
<span id="L1652" rel="#L1652">1652</span>
<span id="L1653" rel="#L1653">1653</span>
<span id="L1654" rel="#L1654">1654</span>
<span id="L1655" rel="#L1655">1655</span>
<span id="L1656" rel="#L1656">1656</span>
<span id="L1657" rel="#L1657">1657</span>
<span id="L1658" rel="#L1658">1658</span>
<span id="L1659" rel="#L1659">1659</span>
<span id="L1660" rel="#L1660">1660</span>
<span id="L1661" rel="#L1661">1661</span>
<span id="L1662" rel="#L1662">1662</span>
<span id="L1663" rel="#L1663">1663</span>
<span id="L1664" rel="#L1664">1664</span>
<span id="L1665" rel="#L1665">1665</span>
<span id="L1666" rel="#L1666">1666</span>
<span id="L1667" rel="#L1667">1667</span>
<span id="L1668" rel="#L1668">1668</span>
<span id="L1669" rel="#L1669">1669</span>
<span id="L1670" rel="#L1670">1670</span>
<span id="L1671" rel="#L1671">1671</span>
<span id="L1672" rel="#L1672">1672</span>
<span id="L1673" rel="#L1673">1673</span>
<span id="L1674" rel="#L1674">1674</span>
<span id="L1675" rel="#L1675">1675</span>
<span id="L1676" rel="#L1676">1676</span>
<span id="L1677" rel="#L1677">1677</span>
<span id="L1678" rel="#L1678">1678</span>
<span id="L1679" rel="#L1679">1679</span>
<span id="L1680" rel="#L1680">1680</span>
<span id="L1681" rel="#L1681">1681</span>
<span id="L1682" rel="#L1682">1682</span>
<span id="L1683" rel="#L1683">1683</span>
<span id="L1684" rel="#L1684">1684</span>
<span id="L1685" rel="#L1685">1685</span>
<span id="L1686" rel="#L1686">1686</span>
<span id="L1687" rel="#L1687">1687</span>
<span id="L1688" rel="#L1688">1688</span>
<span id="L1689" rel="#L1689">1689</span>
<span id="L1690" rel="#L1690">1690</span>
<span id="L1691" rel="#L1691">1691</span>
<span id="L1692" rel="#L1692">1692</span>
<span id="L1693" rel="#L1693">1693</span>
<span id="L1694" rel="#L1694">1694</span>
<span id="L1695" rel="#L1695">1695</span>
<span id="L1696" rel="#L1696">1696</span>
<span id="L1697" rel="#L1697">1697</span>
<span id="L1698" rel="#L1698">1698</span>
<span id="L1699" rel="#L1699">1699</span>
<span id="L1700" rel="#L1700">1700</span>
<span id="L1701" rel="#L1701">1701</span>
<span id="L1702" rel="#L1702">1702</span>
<span id="L1703" rel="#L1703">1703</span>
<span id="L1704" rel="#L1704">1704</span>
<span id="L1705" rel="#L1705">1705</span>
<span id="L1706" rel="#L1706">1706</span>
<span id="L1707" rel="#L1707">1707</span>
<span id="L1708" rel="#L1708">1708</span>
<span id="L1709" rel="#L1709">1709</span>
<span id="L1710" rel="#L1710">1710</span>
<span id="L1711" rel="#L1711">1711</span>
<span id="L1712" rel="#L1712">1712</span>
<span id="L1713" rel="#L1713">1713</span>
<span id="L1714" rel="#L1714">1714</span>
<span id="L1715" rel="#L1715">1715</span>
<span id="L1716" rel="#L1716">1716</span>
<span id="L1717" rel="#L1717">1717</span>
<span id="L1718" rel="#L1718">1718</span>
<span id="L1719" rel="#L1719">1719</span>
<span id="L1720" rel="#L1720">1720</span>
<span id="L1721" rel="#L1721">1721</span>
<span id="L1722" rel="#L1722">1722</span>
<span id="L1723" rel="#L1723">1723</span>
<span id="L1724" rel="#L1724">1724</span>
<span id="L1725" rel="#L1725">1725</span>
<span id="L1726" rel="#L1726">1726</span>
<span id="L1727" rel="#L1727">1727</span>
<span id="L1728" rel="#L1728">1728</span>
<span id="L1729" rel="#L1729">1729</span>
<span id="L1730" rel="#L1730">1730</span>
<span id="L1731" rel="#L1731">1731</span>
<span id="L1732" rel="#L1732">1732</span>
<span id="L1733" rel="#L1733">1733</span>
<span id="L1734" rel="#L1734">1734</span>
<span id="L1735" rel="#L1735">1735</span>
<span id="L1736" rel="#L1736">1736</span>
<span id="L1737" rel="#L1737">1737</span>
<span id="L1738" rel="#L1738">1738</span>
<span id="L1739" rel="#L1739">1739</span>
<span id="L1740" rel="#L1740">1740</span>
<span id="L1741" rel="#L1741">1741</span>
<span id="L1742" rel="#L1742">1742</span>
<span id="L1743" rel="#L1743">1743</span>
<span id="L1744" rel="#L1744">1744</span>
<span id="L1745" rel="#L1745">1745</span>
<span id="L1746" rel="#L1746">1746</span>
<span id="L1747" rel="#L1747">1747</span>
<span id="L1748" rel="#L1748">1748</span>
<span id="L1749" rel="#L1749">1749</span>
<span id="L1750" rel="#L1750">1750</span>
<span id="L1751" rel="#L1751">1751</span>
<span id="L1752" rel="#L1752">1752</span>
<span id="L1753" rel="#L1753">1753</span>
<span id="L1754" rel="#L1754">1754</span>
<span id="L1755" rel="#L1755">1755</span>
<span id="L1756" rel="#L1756">1756</span>
<span id="L1757" rel="#L1757">1757</span>
<span id="L1758" rel="#L1758">1758</span>
<span id="L1759" rel="#L1759">1759</span>
<span id="L1760" rel="#L1760">1760</span>
<span id="L1761" rel="#L1761">1761</span>
<span id="L1762" rel="#L1762">1762</span>
<span id="L1763" rel="#L1763">1763</span>
<span id="L1764" rel="#L1764">1764</span>
<span id="L1765" rel="#L1765">1765</span>
<span id="L1766" rel="#L1766">1766</span>
<span id="L1767" rel="#L1767">1767</span>
<span id="L1768" rel="#L1768">1768</span>
<span id="L1769" rel="#L1769">1769</span>
<span id="L1770" rel="#L1770">1770</span>
<span id="L1771" rel="#L1771">1771</span>
<span id="L1772" rel="#L1772">1772</span>
<span id="L1773" rel="#L1773">1773</span>
<span id="L1774" rel="#L1774">1774</span>
<span id="L1775" rel="#L1775">1775</span>
<span id="L1776" rel="#L1776">1776</span>
<span id="L1777" rel="#L1777">1777</span>
<span id="L1778" rel="#L1778">1778</span>
<span id="L1779" rel="#L1779">1779</span>
<span id="L1780" rel="#L1780">1780</span>
<span id="L1781" rel="#L1781">1781</span>
<span id="L1782" rel="#L1782">1782</span>
<span id="L1783" rel="#L1783">1783</span>
<span id="L1784" rel="#L1784">1784</span>
<span id="L1785" rel="#L1785">1785</span>
<span id="L1786" rel="#L1786">1786</span>
<span id="L1787" rel="#L1787">1787</span>
<span id="L1788" rel="#L1788">1788</span>
<span id="L1789" rel="#L1789">1789</span>
<span id="L1790" rel="#L1790">1790</span>
<span id="L1791" rel="#L1791">1791</span>
<span id="L1792" rel="#L1792">1792</span>
<span id="L1793" rel="#L1793">1793</span>
<span id="L1794" rel="#L1794">1794</span>
<span id="L1795" rel="#L1795">1795</span>
<span id="L1796" rel="#L1796">1796</span>
<span id="L1797" rel="#L1797">1797</span>
<span id="L1798" rel="#L1798">1798</span>
<span id="L1799" rel="#L1799">1799</span>
<span id="L1800" rel="#L1800">1800</span>
<span id="L1801" rel="#L1801">1801</span>
<span id="L1802" rel="#L1802">1802</span>
<span id="L1803" rel="#L1803">1803</span>
<span id="L1804" rel="#L1804">1804</span>
<span id="L1805" rel="#L1805">1805</span>
<span id="L1806" rel="#L1806">1806</span>
<span id="L1807" rel="#L1807">1807</span>
<span id="L1808" rel="#L1808">1808</span>
<span id="L1809" rel="#L1809">1809</span>
<span id="L1810" rel="#L1810">1810</span>
<span id="L1811" rel="#L1811">1811</span>
<span id="L1812" rel="#L1812">1812</span>
<span id="L1813" rel="#L1813">1813</span>
<span id="L1814" rel="#L1814">1814</span>
<span id="L1815" rel="#L1815">1815</span>
<span id="L1816" rel="#L1816">1816</span>
<span id="L1817" rel="#L1817">1817</span>
<span id="L1818" rel="#L1818">1818</span>
<span id="L1819" rel="#L1819">1819</span>
<span id="L1820" rel="#L1820">1820</span>
<span id="L1821" rel="#L1821">1821</span>
<span id="L1822" rel="#L1822">1822</span>
<span id="L1823" rel="#L1823">1823</span>
<span id="L1824" rel="#L1824">1824</span>
<span id="L1825" rel="#L1825">1825</span>
<span id="L1826" rel="#L1826">1826</span>
<span id="L1827" rel="#L1827">1827</span>
<span id="L1828" rel="#L1828">1828</span>
<span id="L1829" rel="#L1829">1829</span>
<span id="L1830" rel="#L1830">1830</span>
<span id="L1831" rel="#L1831">1831</span>
<span id="L1832" rel="#L1832">1832</span>
<span id="L1833" rel="#L1833">1833</span>
<span id="L1834" rel="#L1834">1834</span>
<span id="L1835" rel="#L1835">1835</span>
<span id="L1836" rel="#L1836">1836</span>
<span id="L1837" rel="#L1837">1837</span>
<span id="L1838" rel="#L1838">1838</span>
<span id="L1839" rel="#L1839">1839</span>
<span id="L1840" rel="#L1840">1840</span>
<span id="L1841" rel="#L1841">1841</span>
<span id="L1842" rel="#L1842">1842</span>
<span id="L1843" rel="#L1843">1843</span>
<span id="L1844" rel="#L1844">1844</span>
<span id="L1845" rel="#L1845">1845</span>
<span id="L1846" rel="#L1846">1846</span>
<span id="L1847" rel="#L1847">1847</span>
<span id="L1848" rel="#L1848">1848</span>
<span id="L1849" rel="#L1849">1849</span>
<span id="L1850" rel="#L1850">1850</span>
<span id="L1851" rel="#L1851">1851</span>
<span id="L1852" rel="#L1852">1852</span>
<span id="L1853" rel="#L1853">1853</span>
<span id="L1854" rel="#L1854">1854</span>
<span id="L1855" rel="#L1855">1855</span>
<span id="L1856" rel="#L1856">1856</span>
<span id="L1857" rel="#L1857">1857</span>
<span id="L1858" rel="#L1858">1858</span>
<span id="L1859" rel="#L1859">1859</span>
<span id="L1860" rel="#L1860">1860</span>
<span id="L1861" rel="#L1861">1861</span>
<span id="L1862" rel="#L1862">1862</span>
<span id="L1863" rel="#L1863">1863</span>
<span id="L1864" rel="#L1864">1864</span>
<span id="L1865" rel="#L1865">1865</span>
<span id="L1866" rel="#L1866">1866</span>
<span id="L1867" rel="#L1867">1867</span>
<span id="L1868" rel="#L1868">1868</span>
<span id="L1869" rel="#L1869">1869</span>
<span id="L1870" rel="#L1870">1870</span>
<span id="L1871" rel="#L1871">1871</span>
<span id="L1872" rel="#L1872">1872</span>
<span id="L1873" rel="#L1873">1873</span>
<span id="L1874" rel="#L1874">1874</span>
<span id="L1875" rel="#L1875">1875</span>
<span id="L1876" rel="#L1876">1876</span>
<span id="L1877" rel="#L1877">1877</span>
<span id="L1878" rel="#L1878">1878</span>
<span id="L1879" rel="#L1879">1879</span>
<span id="L1880" rel="#L1880">1880</span>
<span id="L1881" rel="#L1881">1881</span>
<span id="L1882" rel="#L1882">1882</span>
<span id="L1883" rel="#L1883">1883</span>
<span id="L1884" rel="#L1884">1884</span>
<span id="L1885" rel="#L1885">1885</span>
<span id="L1886" rel="#L1886">1886</span>
<span id="L1887" rel="#L1887">1887</span>
<span id="L1888" rel="#L1888">1888</span>
<span id="L1889" rel="#L1889">1889</span>
<span id="L1890" rel="#L1890">1890</span>
<span id="L1891" rel="#L1891">1891</span>
<span id="L1892" rel="#L1892">1892</span>
<span id="L1893" rel="#L1893">1893</span>
<span id="L1894" rel="#L1894">1894</span>
<span id="L1895" rel="#L1895">1895</span>
<span id="L1896" rel="#L1896">1896</span>
<span id="L1897" rel="#L1897">1897</span>
<span id="L1898" rel="#L1898">1898</span>
<span id="L1899" rel="#L1899">1899</span>
<span id="L1900" rel="#L1900">1900</span>
<span id="L1901" rel="#L1901">1901</span>
<span id="L1902" rel="#L1902">1902</span>
<span id="L1903" rel="#L1903">1903</span>
<span id="L1904" rel="#L1904">1904</span>
<span id="L1905" rel="#L1905">1905</span>
<span id="L1906" rel="#L1906">1906</span>
<span id="L1907" rel="#L1907">1907</span>
<span id="L1908" rel="#L1908">1908</span>
<span id="L1909" rel="#L1909">1909</span>
<span id="L1910" rel="#L1910">1910</span>
<span id="L1911" rel="#L1911">1911</span>
<span id="L1912" rel="#L1912">1912</span>
<span id="L1913" rel="#L1913">1913</span>
<span id="L1914" rel="#L1914">1914</span>
<span id="L1915" rel="#L1915">1915</span>
<span id="L1916" rel="#L1916">1916</span>
<span id="L1917" rel="#L1917">1917</span>
<span id="L1918" rel="#L1918">1918</span>
<span id="L1919" rel="#L1919">1919</span>
<span id="L1920" rel="#L1920">1920</span>
<span id="L1921" rel="#L1921">1921</span>
<span id="L1922" rel="#L1922">1922</span>
<span id="L1923" rel="#L1923">1923</span>
<span id="L1924" rel="#L1924">1924</span>
<span id="L1925" rel="#L1925">1925</span>
<span id="L1926" rel="#L1926">1926</span>
<span id="L1927" rel="#L1927">1927</span>
<span id="L1928" rel="#L1928">1928</span>
<span id="L1929" rel="#L1929">1929</span>
<span id="L1930" rel="#L1930">1930</span>
<span id="L1931" rel="#L1931">1931</span>
<span id="L1932" rel="#L1932">1932</span>
<span id="L1933" rel="#L1933">1933</span>
<span id="L1934" rel="#L1934">1934</span>
<span id="L1935" rel="#L1935">1935</span>
<span id="L1936" rel="#L1936">1936</span>
<span id="L1937" rel="#L1937">1937</span>
<span id="L1938" rel="#L1938">1938</span>
<span id="L1939" rel="#L1939">1939</span>
<span id="L1940" rel="#L1940">1940</span>
<span id="L1941" rel="#L1941">1941</span>
<span id="L1942" rel="#L1942">1942</span>
<span id="L1943" rel="#L1943">1943</span>
<span id="L1944" rel="#L1944">1944</span>
<span id="L1945" rel="#L1945">1945</span>
<span id="L1946" rel="#L1946">1946</span>
<span id="L1947" rel="#L1947">1947</span>
<span id="L1948" rel="#L1948">1948</span>
<span id="L1949" rel="#L1949">1949</span>
<span id="L1950" rel="#L1950">1950</span>
<span id="L1951" rel="#L1951">1951</span>
<span id="L1952" rel="#L1952">1952</span>
<span id="L1953" rel="#L1953">1953</span>
<span id="L1954" rel="#L1954">1954</span>
<span id="L1955" rel="#L1955">1955</span>
<span id="L1956" rel="#L1956">1956</span>
<span id="L1957" rel="#L1957">1957</span>
<span id="L1958" rel="#L1958">1958</span>
<span id="L1959" rel="#L1959">1959</span>
<span id="L1960" rel="#L1960">1960</span>
<span id="L1961" rel="#L1961">1961</span>
<span id="L1962" rel="#L1962">1962</span>
<span id="L1963" rel="#L1963">1963</span>
<span id="L1964" rel="#L1964">1964</span>
<span id="L1965" rel="#L1965">1965</span>
<span id="L1966" rel="#L1966">1966</span>
<span id="L1967" rel="#L1967">1967</span>
<span id="L1968" rel="#L1968">1968</span>
<span id="L1969" rel="#L1969">1969</span>
<span id="L1970" rel="#L1970">1970</span>
<span id="L1971" rel="#L1971">1971</span>
<span id="L1972" rel="#L1972">1972</span>
<span id="L1973" rel="#L1973">1973</span>
<span id="L1974" rel="#L1974">1974</span>
<span id="L1975" rel="#L1975">1975</span>
<span id="L1976" rel="#L1976">1976</span>
<span id="L1977" rel="#L1977">1977</span>
<span id="L1978" rel="#L1978">1978</span>
<span id="L1979" rel="#L1979">1979</span>
<span id="L1980" rel="#L1980">1980</span>
<span id="L1981" rel="#L1981">1981</span>
<span id="L1982" rel="#L1982">1982</span>
<span id="L1983" rel="#L1983">1983</span>
<span id="L1984" rel="#L1984">1984</span>
<span id="L1985" rel="#L1985">1985</span>
<span id="L1986" rel="#L1986">1986</span>
<span id="L1987" rel="#L1987">1987</span>
<span id="L1988" rel="#L1988">1988</span>
<span id="L1989" rel="#L1989">1989</span>
<span id="L1990" rel="#L1990">1990</span>
<span id="L1991" rel="#L1991">1991</span>
<span id="L1992" rel="#L1992">1992</span>
<span id="L1993" rel="#L1993">1993</span>
<span id="L1994" rel="#L1994">1994</span>
<span id="L1995" rel="#L1995">1995</span>
<span id="L1996" rel="#L1996">1996</span>
<span id="L1997" rel="#L1997">1997</span>
<span id="L1998" rel="#L1998">1998</span>
<span id="L1999" rel="#L1999">1999</span>
<span id="L2000" rel="#L2000">2000</span>
<span id="L2001" rel="#L2001">2001</span>
<span id="L2002" rel="#L2002">2002</span>
<span id="L2003" rel="#L2003">2003</span>
<span id="L2004" rel="#L2004">2004</span>
<span id="L2005" rel="#L2005">2005</span>
<span id="L2006" rel="#L2006">2006</span>
<span id="L2007" rel="#L2007">2007</span>
<span id="L2008" rel="#L2008">2008</span>
<span id="L2009" rel="#L2009">2009</span>
<span id="L2010" rel="#L2010">2010</span>
<span id="L2011" rel="#L2011">2011</span>
<span id="L2012" rel="#L2012">2012</span>
<span id="L2013" rel="#L2013">2013</span>
<span id="L2014" rel="#L2014">2014</span>
<span id="L2015" rel="#L2015">2015</span>
<span id="L2016" rel="#L2016">2016</span>
<span id="L2017" rel="#L2017">2017</span>
<span id="L2018" rel="#L2018">2018</span>
<span id="L2019" rel="#L2019">2019</span>
<span id="L2020" rel="#L2020">2020</span>
<span id="L2021" rel="#L2021">2021</span>
<span id="L2022" rel="#L2022">2022</span>
<span id="L2023" rel="#L2023">2023</span>
<span id="L2024" rel="#L2024">2024</span>
<span id="L2025" rel="#L2025">2025</span>
<span id="L2026" rel="#L2026">2026</span>
<span id="L2027" rel="#L2027">2027</span>
<span id="L2028" rel="#L2028">2028</span>
<span id="L2029" rel="#L2029">2029</span>
<span id="L2030" rel="#L2030">2030</span>
<span id="L2031" rel="#L2031">2031</span>
<span id="L2032" rel="#L2032">2032</span>
<span id="L2033" rel="#L2033">2033</span>
<span id="L2034" rel="#L2034">2034</span>
<span id="L2035" rel="#L2035">2035</span>
<span id="L2036" rel="#L2036">2036</span>
<span id="L2037" rel="#L2037">2037</span>
<span id="L2038" rel="#L2038">2038</span>
<span id="L2039" rel="#L2039">2039</span>
<span id="L2040" rel="#L2040">2040</span>
<span id="L2041" rel="#L2041">2041</span>
<span id="L2042" rel="#L2042">2042</span>
<span id="L2043" rel="#L2043">2043</span>
<span id="L2044" rel="#L2044">2044</span>
<span id="L2045" rel="#L2045">2045</span>
<span id="L2046" rel="#L2046">2046</span>
<span id="L2047" rel="#L2047">2047</span>
<span id="L2048" rel="#L2048">2048</span>
<span id="L2049" rel="#L2049">2049</span>
<span id="L2050" rel="#L2050">2050</span>
<span id="L2051" rel="#L2051">2051</span>
<span id="L2052" rel="#L2052">2052</span>
<span id="L2053" rel="#L2053">2053</span>
<span id="L2054" rel="#L2054">2054</span>
<span id="L2055" rel="#L2055">2055</span>
<span id="L2056" rel="#L2056">2056</span>
<span id="L2057" rel="#L2057">2057</span>
<span id="L2058" rel="#L2058">2058</span>
<span id="L2059" rel="#L2059">2059</span>
<span id="L2060" rel="#L2060">2060</span>
<span id="L2061" rel="#L2061">2061</span>
<span id="L2062" rel="#L2062">2062</span>
<span id="L2063" rel="#L2063">2063</span>
<span id="L2064" rel="#L2064">2064</span>
<span id="L2065" rel="#L2065">2065</span>
<span id="L2066" rel="#L2066">2066</span>
<span id="L2067" rel="#L2067">2067</span>
<span id="L2068" rel="#L2068">2068</span>
<span id="L2069" rel="#L2069">2069</span>
<span id="L2070" rel="#L2070">2070</span>
<span id="L2071" rel="#L2071">2071</span>
<span id="L2072" rel="#L2072">2072</span>
<span id="L2073" rel="#L2073">2073</span>
<span id="L2074" rel="#L2074">2074</span>
<span id="L2075" rel="#L2075">2075</span>
<span id="L2076" rel="#L2076">2076</span>
<span id="L2077" rel="#L2077">2077</span>
<span id="L2078" rel="#L2078">2078</span>
<span id="L2079" rel="#L2079">2079</span>
<span id="L2080" rel="#L2080">2080</span>
<span id="L2081" rel="#L2081">2081</span>
<span id="L2082" rel="#L2082">2082</span>
<span id="L2083" rel="#L2083">2083</span>
<span id="L2084" rel="#L2084">2084</span>
<span id="L2085" rel="#L2085">2085</span>
<span id="L2086" rel="#L2086">2086</span>
<span id="L2087" rel="#L2087">2087</span>
<span id="L2088" rel="#L2088">2088</span>
<span id="L2089" rel="#L2089">2089</span>
<span id="L2090" rel="#L2090">2090</span>
<span id="L2091" rel="#L2091">2091</span>
<span id="L2092" rel="#L2092">2092</span>
<span id="L2093" rel="#L2093">2093</span>
<span id="L2094" rel="#L2094">2094</span>
<span id="L2095" rel="#L2095">2095</span>
<span id="L2096" rel="#L2096">2096</span>
<span id="L2097" rel="#L2097">2097</span>
<span id="L2098" rel="#L2098">2098</span>
<span id="L2099" rel="#L2099">2099</span>
<span id="L2100" rel="#L2100">2100</span>
<span id="L2101" rel="#L2101">2101</span>
<span id="L2102" rel="#L2102">2102</span>
<span id="L2103" rel="#L2103">2103</span>
<span id="L2104" rel="#L2104">2104</span>
<span id="L2105" rel="#L2105">2105</span>
<span id="L2106" rel="#L2106">2106</span>
<span id="L2107" rel="#L2107">2107</span>
<span id="L2108" rel="#L2108">2108</span>
<span id="L2109" rel="#L2109">2109</span>
<span id="L2110" rel="#L2110">2110</span>
<span id="L2111" rel="#L2111">2111</span>
<span id="L2112" rel="#L2112">2112</span>
<span id="L2113" rel="#L2113">2113</span>
<span id="L2114" rel="#L2114">2114</span>
<span id="L2115" rel="#L2115">2115</span>
<span id="L2116" rel="#L2116">2116</span>
<span id="L2117" rel="#L2117">2117</span>
<span id="L2118" rel="#L2118">2118</span>
<span id="L2119" rel="#L2119">2119</span>
<span id="L2120" rel="#L2120">2120</span>
<span id="L2121" rel="#L2121">2121</span>
<span id="L2122" rel="#L2122">2122</span>
<span id="L2123" rel="#L2123">2123</span>
<span id="L2124" rel="#L2124">2124</span>
<span id="L2125" rel="#L2125">2125</span>
<span id="L2126" rel="#L2126">2126</span>
<span id="L2127" rel="#L2127">2127</span>
<span id="L2128" rel="#L2128">2128</span>
<span id="L2129" rel="#L2129">2129</span>
<span id="L2130" rel="#L2130">2130</span>
<span id="L2131" rel="#L2131">2131</span>
<span id="L2132" rel="#L2132">2132</span>
<span id="L2133" rel="#L2133">2133</span>
<span id="L2134" rel="#L2134">2134</span>
<span id="L2135" rel="#L2135">2135</span>
<span id="L2136" rel="#L2136">2136</span>
<span id="L2137" rel="#L2137">2137</span>
<span id="L2138" rel="#L2138">2138</span>
<span id="L2139" rel="#L2139">2139</span>
<span id="L2140" rel="#L2140">2140</span>
<span id="L2141" rel="#L2141">2141</span>
<span id="L2142" rel="#L2142">2142</span>
<span id="L2143" rel="#L2143">2143</span>
<span id="L2144" rel="#L2144">2144</span>
<span id="L2145" rel="#L2145">2145</span>
<span id="L2146" rel="#L2146">2146</span>
<span id="L2147" rel="#L2147">2147</span>
<span id="L2148" rel="#L2148">2148</span>
<span id="L2149" rel="#L2149">2149</span>
<span id="L2150" rel="#L2150">2150</span>
<span id="L2151" rel="#L2151">2151</span>
<span id="L2152" rel="#L2152">2152</span>
<span id="L2153" rel="#L2153">2153</span>
<span id="L2154" rel="#L2154">2154</span>
<span id="L2155" rel="#L2155">2155</span>
<span id="L2156" rel="#L2156">2156</span>
<span id="L2157" rel="#L2157">2157</span>
<span id="L2158" rel="#L2158">2158</span>
<span id="L2159" rel="#L2159">2159</span>
<span id="L2160" rel="#L2160">2160</span>
<span id="L2161" rel="#L2161">2161</span>
<span id="L2162" rel="#L2162">2162</span>
<span id="L2163" rel="#L2163">2163</span>
<span id="L2164" rel="#L2164">2164</span>
<span id="L2165" rel="#L2165">2165</span>
<span id="L2166" rel="#L2166">2166</span>
<span id="L2167" rel="#L2167">2167</span>
<span id="L2168" rel="#L2168">2168</span>
<span id="L2169" rel="#L2169">2169</span>
<span id="L2170" rel="#L2170">2170</span>
<span id="L2171" rel="#L2171">2171</span>
<span id="L2172" rel="#L2172">2172</span>
<span id="L2173" rel="#L2173">2173</span>
<span id="L2174" rel="#L2174">2174</span>
<span id="L2175" rel="#L2175">2175</span>
<span id="L2176" rel="#L2176">2176</span>
<span id="L2177" rel="#L2177">2177</span>
<span id="L2178" rel="#L2178">2178</span>
<span id="L2179" rel="#L2179">2179</span>
<span id="L2180" rel="#L2180">2180</span>
<span id="L2181" rel="#L2181">2181</span>
<span id="L2182" rel="#L2182">2182</span>
<span id="L2183" rel="#L2183">2183</span>
<span id="L2184" rel="#L2184">2184</span>
<span id="L2185" rel="#L2185">2185</span>
<span id="L2186" rel="#L2186">2186</span>
<span id="L2187" rel="#L2187">2187</span>

            </td>
            <td class="blob-line-code"><div class="code-body highlight"><pre><div class='line' id='LC1'><span class="cm">/**</span></div><div class='line' id='LC2'><span class="cm"> * @license AngularJS v1.3.0-build.2535+sha.876df04</span></div><div class='line' id='LC3'><span class="cm"> * (c) 2010-2014 Google, Inc. http://angularjs.org</span></div><div class='line' id='LC4'><span class="cm"> * License: MIT</span></div><div class='line' id='LC5'><span class="cm"> */</span></div><div class='line' id='LC6'><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nb">window</span><span class="p">,</span> <span class="nx">angular</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC7'><br/></div><div class='line' id='LC8'><span class="s1">&#39;use strict&#39;</span><span class="p">;</span></div><div class='line' id='LC9'><br/></div><div class='line' id='LC10'><span class="cm">/**</span></div><div class='line' id='LC11'><span class="cm"> * @ngdoc object</span></div><div class='line' id='LC12'><span class="cm"> * @name angular.mock</span></div><div class='line' id='LC13'><span class="cm"> * @description</span></div><div class='line' id='LC14'><span class="cm"> *</span></div><div class='line' id='LC15'><span class="cm"> * Namespace from &#39;angular-mocks.js&#39; which contains testing related code.</span></div><div class='line' id='LC16'><span class="cm"> */</span></div><div class='line' id='LC17'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC18'><br/></div><div class='line' id='LC19'><span class="cm">/**</span></div><div class='line' id='LC20'><span class="cm"> * ! This is a private undocumented service !</span></div><div class='line' id='LC21'><span class="cm"> *</span></div><div class='line' id='LC22'><span class="cm"> * @name $browser</span></div><div class='line' id='LC23'><span class="cm"> *</span></div><div class='line' id='LC24'><span class="cm"> * @description</span></div><div class='line' id='LC25'><span class="cm"> * This service is a mock implementation of {@link ng.$browser}. It provides fake</span></div><div class='line' id='LC26'><span class="cm"> * implementation for commonly used browser apis that are hard to test, e.g. setTimeout, xhr,</span></div><div class='line' id='LC27'><span class="cm"> * cookies, etc...</span></div><div class='line' id='LC28'><span class="cm"> *</span></div><div class='line' id='LC29'><span class="cm"> * The api of this service is the same as that of the real {@link ng.$browser $browser}, except</span></div><div class='line' id='LC30'><span class="cm"> * that there are several helper methods available which can be used in tests.</span></div><div class='line' id='LC31'><span class="cm"> */</span></div><div class='line' id='LC32'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$BrowserProvider</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC33'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC34'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$Browser</span><span class="p">();</span></div><div class='line' id='LC35'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC36'><span class="p">};</span></div><div class='line' id='LC37'><br/></div><div class='line' id='LC38'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$Browser</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC39'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC40'><br/></div><div class='line' id='LC41'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">isMock</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC42'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$$url</span> <span class="o">=</span> <span class="s2">&quot;http://server/&quot;</span><span class="p">;</span></div><div class='line' id='LC43'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$$lastUrl</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">$$url</span><span class="p">;</span> <span class="c1">// used by url polling fn</span></div><div class='line' id='LC44'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">pollFns</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC45'><br/></div><div class='line' id='LC46'>&nbsp;&nbsp;<span class="c1">// TODO(vojta): remove this temporary api</span></div><div class='line' id='LC47'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$$completeOutstandingRequest</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC48'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$$incOutstandingRequestCount</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC49'><br/></div><div class='line' id='LC50'><br/></div><div class='line' id='LC51'>&nbsp;&nbsp;<span class="c1">// register url polling fn</span></div><div class='line' id='LC52'><br/></div><div class='line' id='LC53'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">onUrlChange</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">listener</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC54'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">pollFns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span></div><div class='line' id='LC55'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC56'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">$$lastUrl</span> <span class="o">!=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">$$url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC57'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$$lastUrl</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">$$url</span><span class="p">;</span></div><div class='line' id='LC58'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">listener</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">$$url</span><span class="p">);</span></div><div class='line' id='LC59'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC60'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC61'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">);</span></div><div class='line' id='LC62'><br/></div><div class='line' id='LC63'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">listener</span><span class="p">;</span></div><div class='line' id='LC64'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC65'><br/></div><div class='line' id='LC66'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">cookieHash</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC67'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">lastCookieHash</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC68'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC69'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">deferredNextId</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC70'><br/></div><div class='line' id='LC71'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">defer</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">delay</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC72'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delay</span> <span class="o">=</span> <span class="nx">delay</span> <span class="o">||</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC73'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span><span class="nx">time</span><span class="o">:</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">now</span> <span class="o">+</span> <span class="nx">delay</span><span class="p">),</span> <span class="nx">fn</span><span class="o">:</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">id</span><span class="o">:</span> <span class="nx">self</span><span class="p">.</span><span class="nx">deferredNextId</span><span class="p">});</span></div><div class='line' id='LC74'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span> <span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">time</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">time</span><span class="p">;});</span></div><div class='line' id='LC75'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">deferredNextId</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC76'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC77'><br/></div><div class='line' id='LC78'><br/></div><div class='line' id='LC79'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC80'><span class="cm">   * @name $browser#defer.now</span></div><div class='line' id='LC81'><span class="cm">   *</span></div><div class='line' id='LC82'><span class="cm">   * @description</span></div><div class='line' id='LC83'><span class="cm">   * Current milliseconds mock time.</span></div><div class='line' id='LC84'><span class="cm">   */</span></div><div class='line' id='LC85'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">now</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC86'><br/></div><div class='line' id='LC87'><br/></div><div class='line' id='LC88'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">deferId</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC89'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fnIndex</span><span class="p">;</span></div><div class='line' id='LC90'><br/></div><div class='line' id='LC91'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC92'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">deferId</span><span class="p">)</span> <span class="nx">fnIndex</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC93'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC94'><br/></div><div class='line' id='LC95'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fnIndex</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC96'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">fnIndex</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC97'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC98'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC99'><br/></div><div class='line' id='LC100'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC101'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC102'><br/></div><div class='line' id='LC103'><br/></div><div class='line' id='LC104'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC105'><span class="cm">   * @name $browser#defer.flush</span></div><div class='line' id='LC106'><span class="cm">   *</span></div><div class='line' id='LC107'><span class="cm">   * @description</span></div><div class='line' id='LC108'><span class="cm">   * Flushes all pending requests and executes the defer callbacks.</span></div><div class='line' id='LC109'><span class="cm">   *</span></div><div class='line' id='LC110'><span class="cm">   * @param {number=} number of milliseconds to flush. See {@link #defer.now}</span></div><div class='line' id='LC111'><span class="cm">   */</span></div><div class='line' id='LC112'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">delay</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC113'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">delay</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">now</span> <span class="o">+=</span> <span class="nx">delay</span><span class="p">;</span></div><div class='line' id='LC115'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC116'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">now</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">[</span><span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">length</span><span class="o">-</span><span class="mi">1</span><span class="p">].</span><span class="nx">time</span><span class="p">;</span></div><div class='line' id='LC118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;No deferred tasks to be flushed&#39;</span><span class="p">);</span></div><div class='line' id='LC120'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC121'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC122'><br/></div><div class='line' id='LC123'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">time</span> <span class="o">&lt;=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">now</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC124'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">shift</span><span class="p">().</span><span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC125'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC126'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC127'><br/></div><div class='line' id='LC128'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">$$baseHref</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC129'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">baseHref</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC130'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$$baseHref</span><span class="p">;</span></div><div class='line' id='LC131'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC132'><span class="p">};</span></div><div class='line' id='LC133'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$Browser</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC134'><br/></div><div class='line' id='LC135'><span class="cm">/**</span></div><div class='line' id='LC136'><span class="cm">  * @name $browser#poll</span></div><div class='line' id='LC137'><span class="cm">  *</span></div><div class='line' id='LC138'><span class="cm">  * @description</span></div><div class='line' id='LC139'><span class="cm">  * run all fns in pollFns</span></div><div class='line' id='LC140'><span class="cm">  */</span></div><div class='line' id='LC141'>&nbsp;&nbsp;<span class="nx">poll</span><span class="o">:</span> <span class="kd">function</span> <span class="nx">poll</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC142'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">pollFns</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pollFn</span><span class="p">){</span></div><div class='line' id='LC143'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">pollFn</span><span class="p">();</span></div><div class='line' id='LC144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC145'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC146'><br/></div><div class='line' id='LC147'>&nbsp;&nbsp;<span class="nx">addPollFn</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">pollFn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">pollFns</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">pollFn</span><span class="p">);</span></div><div class='line' id='LC149'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">pollFn</span><span class="p">;</span></div><div class='line' id='LC150'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC151'><br/></div><div class='line' id='LC152'>&nbsp;&nbsp;<span class="nx">url</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">replace</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC153'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">url</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC154'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC157'><br/></div><div class='line' id='LC158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">$$url</span><span class="p">;</span></div><div class='line' id='LC159'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC160'><br/></div><div class='line' id='LC161'>&nbsp;&nbsp;<span class="nx">cookies</span><span class="o">:</span>  <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">value</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">value</span><span class="p">)</span> <span class="o">&amp;&amp;</span>       <span class="c1">//strings only</span></div><div class='line' id='LC167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">value</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;=</span> <span class="mi">4096</span><span class="p">)</span> <span class="p">{</span>          <span class="c1">//strict cookie storage limits</span></div><div class='line' id='LC168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span><span class="p">[</span><span class="nx">name</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC171'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">angular</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">lastCookieHash</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">lastCookieHash</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span><span class="p">);</span></div><div class='line' id='LC174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span><span class="p">);</span></div><div class='line' id='LC175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">.</span><span class="nx">cookieHash</span><span class="p">;</span></div><div class='line' id='LC177'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC178'>&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC179'><br/></div><div class='line' id='LC180'>&nbsp;&nbsp;<span class="nx">notifyWhenNoOutstandingRequests</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC181'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC182'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC183'><span class="p">};</span></div><div class='line' id='LC184'><br/></div><div class='line' id='LC185'><br/></div><div class='line' id='LC186'><span class="cm">/**</span></div><div class='line' id='LC187'><span class="cm"> * @ngdoc provider</span></div><div class='line' id='LC188'><span class="cm"> * @name $exceptionHandlerProvider</span></div><div class='line' id='LC189'><span class="cm"> *</span></div><div class='line' id='LC190'><span class="cm"> * @description</span></div><div class='line' id='LC191'><span class="cm"> * Configures the mock implementation of {@link ng.$exceptionHandler} to rethrow or to log errors</span></div><div class='line' id='LC192'><span class="cm"> * passed into the `$exceptionHandler`.</span></div><div class='line' id='LC193'><span class="cm"> */</span></div><div class='line' id='LC194'><br/></div><div class='line' id='LC195'><span class="cm">/**</span></div><div class='line' id='LC196'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC197'><span class="cm"> * @name $exceptionHandler</span></div><div class='line' id='LC198'><span class="cm"> *</span></div><div class='line' id='LC199'><span class="cm"> * @description</span></div><div class='line' id='LC200'><span class="cm"> * Mock implementation of {@link ng.$exceptionHandler} that rethrows or logs errors passed</span></div><div class='line' id='LC201'><span class="cm"> * into it. See {@link ngMock.$exceptionHandlerProvider $exceptionHandlerProvider} for configuration</span></div><div class='line' id='LC202'><span class="cm"> * information.</span></div><div class='line' id='LC203'><span class="cm"> *</span></div><div class='line' id='LC204'><span class="cm"> *</span></div><div class='line' id='LC205'><span class="cm"> * ```js</span></div><div class='line' id='LC206'><span class="cm"> *   describe(&#39;$exceptionHandlerProvider&#39;, function() {</span></div><div class='line' id='LC207'><span class="cm"> *</span></div><div class='line' id='LC208'><span class="cm"> *     it(&#39;should capture log messages and exceptions&#39;, function() {</span></div><div class='line' id='LC209'><span class="cm"> *</span></div><div class='line' id='LC210'><span class="cm"> *       module(function($exceptionHandlerProvider) {</span></div><div class='line' id='LC211'><span class="cm"> *         $exceptionHandlerProvider.mode(&#39;log&#39;);</span></div><div class='line' id='LC212'><span class="cm"> *       });</span></div><div class='line' id='LC213'><span class="cm"> *</span></div><div class='line' id='LC214'><span class="cm"> *       inject(function($log, $exceptionHandler, $timeout) {</span></div><div class='line' id='LC215'><span class="cm"> *         $timeout(function() { $log.log(1); });</span></div><div class='line' id='LC216'><span class="cm"> *         $timeout(function() { $log.log(2); throw &#39;banana peel&#39;; });</span></div><div class='line' id='LC217'><span class="cm"> *         $timeout(function() { $log.log(3); });</span></div><div class='line' id='LC218'><span class="cm"> *         expect($exceptionHandler.errors).toEqual([]);</span></div><div class='line' id='LC219'><span class="cm"> *         expect($log.assertEmpty());</span></div><div class='line' id='LC220'><span class="cm"> *         $timeout.flush();</span></div><div class='line' id='LC221'><span class="cm"> *         expect($exceptionHandler.errors).toEqual([&#39;banana peel&#39;]);</span></div><div class='line' id='LC222'><span class="cm"> *         expect($log.log.logs).toEqual([[1], [2], [3]]);</span></div><div class='line' id='LC223'><span class="cm"> *       });</span></div><div class='line' id='LC224'><span class="cm"> *     });</span></div><div class='line' id='LC225'><span class="cm"> *   });</span></div><div class='line' id='LC226'><span class="cm"> * ```</span></div><div class='line' id='LC227'><span class="cm"> */</span></div><div class='line' id='LC228'><br/></div><div class='line' id='LC229'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$ExceptionHandlerProvider</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC230'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handler</span><span class="p">;</span></div><div class='line' id='LC231'><br/></div><div class='line' id='LC232'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC233'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC234'><span class="cm">   * @name $exceptionHandlerProvider#mode</span></div><div class='line' id='LC235'><span class="cm">   *</span></div><div class='line' id='LC236'><span class="cm">   * @description</span></div><div class='line' id='LC237'><span class="cm">   * Sets the logging mode.</span></div><div class='line' id='LC238'><span class="cm">   *</span></div><div class='line' id='LC239'><span class="cm">   * @param {string} mode Mode of operation, defaults to `rethrow`.</span></div><div class='line' id='LC240'><span class="cm">   *</span></div><div class='line' id='LC241'><span class="cm">   *   - `rethrow`: If any errors are passed into the handler in tests, it typically</span></div><div class='line' id='LC242'><span class="cm">   *                means that there is a bug in the application or test, so this mock will</span></div><div class='line' id='LC243'><span class="cm">   *                make these tests fail.</span></div><div class='line' id='LC244'><span class="cm">   *   - `log`: Sometimes it is desirable to test that an error is thrown, for this case the `log`</span></div><div class='line' id='LC245'><span class="cm">   *            mode stores an array of errors in `$exceptionHandler.errors`, to allow later</span></div><div class='line' id='LC246'><span class="cm">   *            assertion of them. See {@link ngMock.$log#assertEmpty assertEmpty()} and</span></div><div class='line' id='LC247'><span class="cm">   *            {@link ngMock.$log#reset reset()}</span></div><div class='line' id='LC248'><span class="cm">   */</span></div><div class='line' id='LC249'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">mode</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">mode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC250'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">switch</span><span class="p">(</span><span class="nx">mode</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC251'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;rethrow&#39;</span><span class="o">:</span></div><div class='line' id='LC252'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC253'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC254'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC255'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC256'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">case</span> <span class="s1">&#39;log&#39;</span><span class="o">:</span></div><div class='line' id='LC257'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">errors</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC258'><br/></div><div class='line' id='LC259'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handler</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC260'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">arguments</span><span class="p">.</span><span class="nx">length</span> <span class="o">==</span> <span class="mi">1</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC261'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">e</span><span class="p">);</span></div><div class='line' id='LC262'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC263'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">push</span><span class="p">([].</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC264'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC265'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC266'><br/></div><div class='line' id='LC267'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handler</span><span class="p">.</span><span class="nx">errors</span> <span class="o">=</span> <span class="nx">errors</span><span class="p">;</span></div><div class='line' id='LC268'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC269'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">default</span><span class="o">:</span></div><div class='line' id='LC270'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Unknown mode &#39;&quot;</span> <span class="o">+</span> <span class="nx">mode</span> <span class="o">+</span> <span class="s2">&quot;&#39;, only &#39;log&#39;/&#39;rethrow&#39; modes are allowed!&quot;</span><span class="p">);</span></div><div class='line' id='LC271'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC272'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC273'><br/></div><div class='line' id='LC274'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC275'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">handler</span><span class="p">;</span></div><div class='line' id='LC276'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC277'><br/></div><div class='line' id='LC278'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">mode</span><span class="p">(</span><span class="s1">&#39;rethrow&#39;</span><span class="p">);</span></div><div class='line' id='LC279'><span class="p">};</span></div><div class='line' id='LC280'><br/></div><div class='line' id='LC281'><br/></div><div class='line' id='LC282'><span class="cm">/**</span></div><div class='line' id='LC283'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC284'><span class="cm"> * @name $log</span></div><div class='line' id='LC285'><span class="cm"> *</span></div><div class='line' id='LC286'><span class="cm"> * @description</span></div><div class='line' id='LC287'><span class="cm"> * Mock implementation of {@link ng.$log} that gathers all logged messages in arrays</span></div><div class='line' id='LC288'><span class="cm"> * (one array per logging level). These arrays are exposed as `logs` property of each of the</span></div><div class='line' id='LC289'><span class="cm"> * level-specific log function, e.g. for level `error` the array is exposed as `$log.error.logs`.</span></div><div class='line' id='LC290'><span class="cm"> *</span></div><div class='line' id='LC291'><span class="cm"> */</span></div><div class='line' id='LC292'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$LogProvider</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC293'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">debug</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC294'><br/></div><div class='line' id='LC295'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">concat</span><span class="p">(</span><span class="nx">array1</span><span class="p">,</span> <span class="nx">array2</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC296'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">array1</span><span class="p">.</span><span class="nx">concat</span><span class="p">(</span><span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">array2</span><span class="p">,</span> <span class="nx">index</span><span class="p">));</span></div><div class='line' id='LC297'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC298'><br/></div><div class='line' id='LC299'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">debugEnabled</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">flag</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC300'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">flag</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC301'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">debug</span> <span class="o">=</span> <span class="nx">flag</span><span class="p">;</span></div><div class='line' id='LC302'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC303'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC304'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">debug</span><span class="p">;</span></div><div class='line' id='LC305'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC306'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC307'><br/></div><div class='line' id='LC308'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC309'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$log</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC310'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">log</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">$log</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">concat</span><span class="p">([],</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span> <span class="p">},</span></div><div class='line' id='LC311'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">warn</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">$log</span><span class="p">.</span><span class="nx">warn</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">concat</span><span class="p">([],</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span> <span class="p">},</span></div><div class='line' id='LC312'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">info</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">$log</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">concat</span><span class="p">([],</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span> <span class="p">},</span></div><div class='line' id='LC313'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">error</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span> <span class="nx">$log</span><span class="p">.</span><span class="nx">error</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">concat</span><span class="p">([],</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span> <span class="p">},</span></div><div class='line' id='LC314'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">debug</span><span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC315'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">debug</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC316'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">debug</span><span class="p">.</span><span class="nx">logs</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">concat</span><span class="p">([],</span> <span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC317'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC318'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC319'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC320'><br/></div><div class='line' id='LC321'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC322'><span class="cm">     * @ngdoc method</span></div><div class='line' id='LC323'><span class="cm">     * @name $log#reset</span></div><div class='line' id='LC324'><span class="cm">     *</span></div><div class='line' id='LC325'><span class="cm">     * @description</span></div><div class='line' id='LC326'><span class="cm">     * Reset all of the logging arrays to empty.</span></div><div class='line' id='LC327'><span class="cm">     */</span></div><div class='line' id='LC328'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">reset</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC329'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC330'><span class="cm">       * @ngdoc property</span></div><div class='line' id='LC331'><span class="cm">       * @name $log#log.logs</span></div><div class='line' id='LC332'><span class="cm">       *</span></div><div class='line' id='LC333'><span class="cm">       * @description</span></div><div class='line' id='LC334'><span class="cm">       * Array of messages logged using {@link ngMock.$log#log}.</span></div><div class='line' id='LC335'><span class="cm">       *</span></div><div class='line' id='LC336'><span class="cm">       * @example</span></div><div class='line' id='LC337'><span class="cm">       * ```js</span></div><div class='line' id='LC338'><span class="cm">       * $log.log(&#39;Some Log&#39;);</span></div><div class='line' id='LC339'><span class="cm">       * var first = $log.log.logs.unshift();</span></div><div class='line' id='LC340'><span class="cm">       * ```</span></div><div class='line' id='LC341'><span class="cm">       */</span></div><div class='line' id='LC342'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">log</span><span class="p">.</span><span class="nx">logs</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC343'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC344'><span class="cm">       * @ngdoc property</span></div><div class='line' id='LC345'><span class="cm">       * @name $log#info.logs</span></div><div class='line' id='LC346'><span class="cm">       *</span></div><div class='line' id='LC347'><span class="cm">       * @description</span></div><div class='line' id='LC348'><span class="cm">       * Array of messages logged using {@link ngMock.$log#info}.</span></div><div class='line' id='LC349'><span class="cm">       *</span></div><div class='line' id='LC350'><span class="cm">       * @example</span></div><div class='line' id='LC351'><span class="cm">       * ```js</span></div><div class='line' id='LC352'><span class="cm">       * $log.info(&#39;Some Info&#39;);</span></div><div class='line' id='LC353'><span class="cm">       * var first = $log.info.logs.unshift();</span></div><div class='line' id='LC354'><span class="cm">       * ```</span></div><div class='line' id='LC355'><span class="cm">       */</span></div><div class='line' id='LC356'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">info</span><span class="p">.</span><span class="nx">logs</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC357'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC358'><span class="cm">       * @ngdoc property</span></div><div class='line' id='LC359'><span class="cm">       * @name $log#warn.logs</span></div><div class='line' id='LC360'><span class="cm">       *</span></div><div class='line' id='LC361'><span class="cm">       * @description</span></div><div class='line' id='LC362'><span class="cm">       * Array of messages logged using {@link ngMock.$log#warn}.</span></div><div class='line' id='LC363'><span class="cm">       *</span></div><div class='line' id='LC364'><span class="cm">       * @example</span></div><div class='line' id='LC365'><span class="cm">       * ```js</span></div><div class='line' id='LC366'><span class="cm">       * $log.warn(&#39;Some Warning&#39;);</span></div><div class='line' id='LC367'><span class="cm">       * var first = $log.warn.logs.unshift();</span></div><div class='line' id='LC368'><span class="cm">       * ```</span></div><div class='line' id='LC369'><span class="cm">       */</span></div><div class='line' id='LC370'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">warn</span><span class="p">.</span><span class="nx">logs</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC371'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC372'><span class="cm">       * @ngdoc property</span></div><div class='line' id='LC373'><span class="cm">       * @name $log#error.logs</span></div><div class='line' id='LC374'><span class="cm">       *</span></div><div class='line' id='LC375'><span class="cm">       * @description</span></div><div class='line' id='LC376'><span class="cm">       * Array of messages logged using {@link ngMock.$log#error}.</span></div><div class='line' id='LC377'><span class="cm">       *</span></div><div class='line' id='LC378'><span class="cm">       * @example</span></div><div class='line' id='LC379'><span class="cm">       * ```js</span></div><div class='line' id='LC380'><span class="cm">       * $log.error(&#39;Some Error&#39;);</span></div><div class='line' id='LC381'><span class="cm">       * var first = $log.error.logs.unshift();</span></div><div class='line' id='LC382'><span class="cm">       * ```</span></div><div class='line' id='LC383'><span class="cm">       */</span></div><div class='line' id='LC384'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">error</span><span class="p">.</span><span class="nx">logs</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC385'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC386'><span class="cm">       * @ngdoc property</span></div><div class='line' id='LC387'><span class="cm">       * @name $log#debug.logs</span></div><div class='line' id='LC388'><span class="cm">       *</span></div><div class='line' id='LC389'><span class="cm">       * @description</span></div><div class='line' id='LC390'><span class="cm">       * Array of messages logged using {@link ngMock.$log#debug}.</span></div><div class='line' id='LC391'><span class="cm">       *</span></div><div class='line' id='LC392'><span class="cm">       * @example</span></div><div class='line' id='LC393'><span class="cm">       * ```js</span></div><div class='line' id='LC394'><span class="cm">       * $log.debug(&#39;Some Error&#39;);</span></div><div class='line' id='LC395'><span class="cm">       * var first = $log.debug.logs.unshift();</span></div><div class='line' id='LC396'><span class="cm">       * ```</span></div><div class='line' id='LC397'><span class="cm">       */</span></div><div class='line' id='LC398'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">debug</span><span class="p">.</span><span class="nx">logs</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC399'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC400'><br/></div><div class='line' id='LC401'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC402'><span class="cm">     * @ngdoc method</span></div><div class='line' id='LC403'><span class="cm">     * @name $log#assertEmpty</span></div><div class='line' id='LC404'><span class="cm">     *</span></div><div class='line' id='LC405'><span class="cm">     * @description</span></div><div class='line' id='LC406'><span class="cm">     * Assert that the all of the logging methods have no logged messages. If messages present, an</span></div><div class='line' id='LC407'><span class="cm">     * exception is thrown.</span></div><div class='line' id='LC408'><span class="cm">     */</span></div><div class='line' id='LC409'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">assertEmpty</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC410'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">errors</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC411'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">([</span><span class="s1">&#39;error&#39;</span><span class="p">,</span> <span class="s1">&#39;warn&#39;</span><span class="p">,</span> <span class="s1">&#39;info&#39;</span><span class="p">,</span> <span class="s1">&#39;log&#39;</span><span class="p">,</span> <span class="s1">&#39;debug&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">logLevel</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC412'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">$log</span><span class="p">[</span><span class="nx">logLevel</span><span class="p">].</span><span class="nx">logs</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">log</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC413'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">log</span><span class="p">,</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">logItem</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC414'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;MOCK $log (&#39;</span> <span class="o">+</span> <span class="nx">logLevel</span> <span class="o">+</span> <span class="s1">&#39;): &#39;</span> <span class="o">+</span> <span class="nb">String</span><span class="p">(</span><span class="nx">logItem</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC415'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">logItem</span><span class="p">.</span><span class="nx">stack</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC416'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC417'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC418'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC419'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">errors</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC420'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="s2">&quot;Expected $log to be empty! Either a message was logged unexpectedly, or &quot;</span><span class="o">+</span></div><div class='line' id='LC421'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s2">&quot;an expected log message was not checked and removed:&quot;</span><span class="p">);</span></div><div class='line' id='LC422'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errors</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC423'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="nx">errors</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;\n---------\n&#39;</span><span class="p">));</span></div><div class='line' id='LC424'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC425'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC426'><br/></div><div class='line' id='LC427'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$log</span><span class="p">.</span><span class="nx">reset</span><span class="p">();</span></div><div class='line' id='LC428'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$log</span><span class="p">;</span></div><div class='line' id='LC429'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC430'><span class="p">};</span></div><div class='line' id='LC431'><br/></div><div class='line' id='LC432'><br/></div><div class='line' id='LC433'><span class="cm">/**</span></div><div class='line' id='LC434'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC435'><span class="cm"> * @name $interval</span></div><div class='line' id='LC436'><span class="cm"> *</span></div><div class='line' id='LC437'><span class="cm"> * @description</span></div><div class='line' id='LC438'><span class="cm"> * Mock implementation of the $interval service.</span></div><div class='line' id='LC439'><span class="cm"> *</span></div><div class='line' id='LC440'><span class="cm"> * Use {@link ngMock.$interval#flush `$interval.flush(millis)`} to</span></div><div class='line' id='LC441'><span class="cm"> * move forward by `millis` milliseconds and trigger any functions scheduled to run in that</span></div><div class='line' id='LC442'><span class="cm"> * time.</span></div><div class='line' id='LC443'><span class="cm"> *</span></div><div class='line' id='LC444'><span class="cm"> * @param {function()} fn A function that should be called repeatedly.</span></div><div class='line' id='LC445'><span class="cm"> * @param {number} delay Number of milliseconds between each function call.</span></div><div class='line' id='LC446'><span class="cm"> * @param {number=} [count=0] Number of times to repeat. If not set, or 0, will repeat</span></div><div class='line' id='LC447'><span class="cm"> *   indefinitely.</span></div><div class='line' id='LC448'><span class="cm"> * @param {boolean=} [invokeApply=true] If set to `false` skips model dirty checking, otherwise</span></div><div class='line' id='LC449'><span class="cm"> *   will invoke `fn` within the {@link ng.$rootScope.Scope#$apply $apply} block.</span></div><div class='line' id='LC450'><span class="cm"> * @returns {promise} A promise which will be notified on each iteration.</span></div><div class='line' id='LC451'><span class="cm"> */</span></div><div class='line' id='LC452'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$IntervalProvider</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC453'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;$rootScope&#39;</span><span class="p">,</span> <span class="s1">&#39;$q&#39;</span><span class="p">,</span></div><div class='line' id='LC454'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span><span class="p">(</span><span class="nx">$rootScope</span><span class="p">,</span>   <span class="nx">$q</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC455'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">repeatFns</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC456'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nextRepeatId</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">now</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC458'><br/></div><div class='line' id='LC459'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">$interval</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">delay</span><span class="p">,</span> <span class="nx">count</span><span class="p">,</span> <span class="nx">invokeApply</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">deferred</span> <span class="o">=</span> <span class="nx">$q</span><span class="p">.</span><span class="nx">defer</span><span class="p">(),</span></div><div class='line' id='LC461'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span> <span class="o">=</span> <span class="nx">deferred</span><span class="p">.</span><span class="nx">promise</span><span class="p">,</span></div><div class='line' id='LC462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">iteration</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">skipApply</span> <span class="o">=</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">invokeApply</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">invokeApply</span><span class="p">);</span></div><div class='line' id='LC464'><br/></div><div class='line' id='LC465'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">count</span> <span class="o">=</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">count</span><span class="p">))</span> <span class="o">?</span> <span class="nx">count</span> <span class="o">:</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC466'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="kc">null</span><span class="p">,</span> <span class="kc">null</span><span class="p">,</span> <span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC467'><br/></div><div class='line' id='LC468'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">promise</span><span class="p">.</span><span class="nx">$$intervalId</span> <span class="o">=</span> <span class="nx">nextRepeatId</span><span class="p">;</span></div><div class='line' id='LC469'><br/></div><div class='line' id='LC470'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">tick</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC471'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deferred</span><span class="p">.</span><span class="nx">notify</span><span class="p">(</span><span class="nx">iteration</span><span class="o">++</span><span class="p">);</span></div><div class='line' id='LC472'><br/></div><div class='line' id='LC473'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">count</span> <span class="o">&gt;</span> <span class="mi">0</span> <span class="o">&amp;&amp;</span> <span class="nx">iteration</span> <span class="o">&gt;=</span> <span class="nx">count</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC474'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fnIndex</span><span class="p">;</span></div><div class='line' id='LC475'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deferred</span><span class="p">.</span><span class="nx">resolve</span><span class="p">(</span><span class="nx">iteration</span><span class="p">);</span></div><div class='line' id='LC476'><br/></div><div class='line' id='LC477'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">repeatFns</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC478'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">promise</span><span class="p">.</span><span class="nx">$$intervalId</span><span class="p">)</span> <span class="nx">fnIndex</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC479'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC480'><br/></div><div class='line' id='LC481'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fnIndex</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC482'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repeatFns</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">fnIndex</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC483'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC484'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC485'><br/></div><div class='line' id='LC486'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">skipApply</span><span class="p">)</span> <span class="nx">$rootScope</span><span class="p">.</span><span class="nx">$apply</span><span class="p">();</span></div><div class='line' id='LC487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC488'><br/></div><div class='line' id='LC489'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repeatFns</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC490'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nextTime</span><span class="o">:</span><span class="p">(</span><span class="nx">now</span> <span class="o">+</span> <span class="nx">delay</span><span class="p">),</span></div><div class='line' id='LC491'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">delay</span><span class="o">:</span> <span class="nx">delay</span><span class="p">,</span></div><div class='line' id='LC492'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="o">:</span> <span class="nx">tick</span><span class="p">,</span></div><div class='line' id='LC493'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">id</span><span class="o">:</span> <span class="nx">nextRepeatId</span><span class="p">,</span></div><div class='line' id='LC494'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">deferred</span><span class="o">:</span> <span class="nx">deferred</span></div><div class='line' id='LC495'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC496'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repeatFns</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span> <span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">nextTime</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">nextTime</span><span class="p">;});</span></div><div class='line' id='LC497'><br/></div><div class='line' id='LC498'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">nextRepeatId</span><span class="o">++</span><span class="p">;</span></div><div class='line' id='LC499'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">promise</span><span class="p">;</span></div><div class='line' id='LC500'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC501'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC502'><span class="cm">     * @ngdoc method</span></div><div class='line' id='LC503'><span class="cm">     * @name $interval#cancel</span></div><div class='line' id='LC504'><span class="cm">     *</span></div><div class='line' id='LC505'><span class="cm">     * @description</span></div><div class='line' id='LC506'><span class="cm">     * Cancels a task associated with the `promise`.</span></div><div class='line' id='LC507'><span class="cm">     *</span></div><div class='line' id='LC508'><span class="cm">     * @param {promise} promise A promise from calling the `$interval` function.</span></div><div class='line' id='LC509'><span class="cm">     * @returns {boolean} Returns `true` if the task was successfully cancelled.</span></div><div class='line' id='LC510'><span class="cm">     */</span></div><div class='line' id='LC511'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$interval</span><span class="p">.</span><span class="nx">cancel</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">promise</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC512'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="o">!</span><span class="nx">promise</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC513'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">fnIndex</span><span class="p">;</span></div><div class='line' id='LC514'><br/></div><div class='line' id='LC515'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">repeatFns</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">,</span> <span class="nx">index</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC516'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fn</span><span class="p">.</span><span class="nx">id</span> <span class="o">===</span> <span class="nx">promise</span><span class="p">.</span><span class="nx">$$intervalId</span><span class="p">)</span> <span class="nx">fnIndex</span> <span class="o">=</span> <span class="nx">index</span><span class="p">;</span></div><div class='line' id='LC517'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC518'><br/></div><div class='line' id='LC519'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">fnIndex</span> <span class="o">!==</span> <span class="kc">undefined</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC520'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repeatFns</span><span class="p">[</span><span class="nx">fnIndex</span><span class="p">].</span><span class="nx">deferred</span><span class="p">.</span><span class="nx">reject</span><span class="p">(</span><span class="s1">&#39;canceled&#39;</span><span class="p">);</span></div><div class='line' id='LC521'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repeatFns</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">fnIndex</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC522'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC523'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC524'><br/></div><div class='line' id='LC525'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC526'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC527'><br/></div><div class='line' id='LC528'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC529'><span class="cm">     * @ngdoc method</span></div><div class='line' id='LC530'><span class="cm">     * @name $interval#flush</span></div><div class='line' id='LC531'><span class="cm">     * @description</span></div><div class='line' id='LC532'><span class="cm">     *</span></div><div class='line' id='LC533'><span class="cm">     * Runs interval tasks scheduled to be run in the next `millis` milliseconds.</span></div><div class='line' id='LC534'><span class="cm">     *</span></div><div class='line' id='LC535'><span class="cm">     * @param {number=} millis maximum timeout amount to flush up until.</span></div><div class='line' id='LC536'><span class="cm">     *</span></div><div class='line' id='LC537'><span class="cm">     * @return {number} The amount of time moved forward.</span></div><div class='line' id='LC538'><span class="cm">     */</span></div><div class='line' id='LC539'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$interval</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">millis</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC540'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">now</span> <span class="o">+=</span> <span class="nx">millis</span><span class="p">;</span></div><div class='line' id='LC541'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">repeatFns</span><span class="p">.</span><span class="nx">length</span> <span class="o">&amp;&amp;</span> <span class="nx">repeatFns</span><span class="p">[</span><span class="mi">0</span><span class="p">].</span><span class="nx">nextTime</span> <span class="o">&lt;=</span> <span class="nx">now</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC542'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">task</span> <span class="o">=</span> <span class="nx">repeatFns</span><span class="p">[</span><span class="mi">0</span><span class="p">];</span></div><div class='line' id='LC543'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">task</span><span class="p">.</span><span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC544'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">task</span><span class="p">.</span><span class="nx">nextTime</span> <span class="o">+=</span> <span class="nx">task</span><span class="p">.</span><span class="nx">delay</span><span class="p">;</span></div><div class='line' id='LC545'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">repeatFns</span><span class="p">.</span><span class="nx">sort</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">a</span><span class="p">,</span><span class="nx">b</span><span class="p">){</span> <span class="k">return</span> <span class="nx">a</span><span class="p">.</span><span class="nx">nextTime</span> <span class="o">-</span> <span class="nx">b</span><span class="p">.</span><span class="nx">nextTime</span><span class="p">;});</span></div><div class='line' id='LC546'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC547'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">millis</span><span class="p">;</span></div><div class='line' id='LC548'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC549'><br/></div><div class='line' id='LC550'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$interval</span><span class="p">;</span></div><div class='line' id='LC551'>&nbsp;&nbsp;<span class="p">}];</span></div><div class='line' id='LC552'><span class="p">};</span></div><div class='line' id='LC553'><br/></div><div class='line' id='LC554'><br/></div><div class='line' id='LC555'><span class="cm">/* jshint -W101 */</span></div><div class='line' id='LC556'><span class="cm">/* The R_ISO8061_STR regex is never going to fit into the 100 char limit!</span></div><div class='line' id='LC557'><span class="cm"> * This directive should go inside the anonymous function but a bug in JSHint means that it would</span></div><div class='line' id='LC558'><span class="cm"> * not be enacted early enough to prevent the warning.</span></div><div class='line' id='LC559'><span class="cm"> */</span></div><div class='line' id='LC560'><span class="kd">var</span> <span class="nx">R_ISO8061_STR</span> <span class="o">=</span> <span class="sr">/^(\d{4})-?(\d\d)-?(\d\d)(?:T(\d\d)(?:\:?(\d\d)(?:\:?(\d\d)(?:\.(\d{3}))?)?)?(Z|([+-])(\d\d):?(\d\d)))?$/</span><span class="p">;</span></div><div class='line' id='LC561'><br/></div><div class='line' id='LC562'><span class="kd">function</span> <span class="nx">jsonStringToDate</span><span class="p">(</span><span class="nx">string</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC563'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">match</span><span class="p">;</span></div><div class='line' id='LC564'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">match</span> <span class="o">=</span> <span class="nx">string</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">R_ISO8061_STR</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC565'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC566'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tzHour</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span></div><div class='line' id='LC567'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tzMin</span>  <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC568'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">9</span><span class="p">])</span> <span class="p">{</span></div><div class='line' id='LC569'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tzHour</span> <span class="o">=</span> <span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">9</span><span class="p">]</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">10</span><span class="p">]);</span></div><div class='line' id='LC570'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">tzMin</span> <span class="o">=</span> <span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">9</span><span class="p">]</span> <span class="o">+</span> <span class="nx">match</span><span class="p">[</span><span class="mi">11</span><span class="p">]);</span></div><div class='line' id='LC571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC572'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">date</span><span class="p">.</span><span class="nx">setUTCFullYear</span><span class="p">(</span><span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">2</span><span class="p">])</span> <span class="o">-</span> <span class="mi">1</span><span class="p">,</span> <span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">3</span><span class="p">]));</span></div><div class='line' id='LC573'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">date</span><span class="p">.</span><span class="nx">setUTCHours</span><span class="p">(</span><span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">4</span><span class="p">]</span><span class="o">||</span><span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="nx">tzHour</span><span class="p">,</span></div><div class='line' id='LC574'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">5</span><span class="p">]</span><span class="o">||</span><span class="mi">0</span><span class="p">)</span> <span class="o">-</span> <span class="nx">tzMin</span><span class="p">,</span></div><div class='line' id='LC575'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">6</span><span class="p">]</span><span class="o">||</span><span class="mi">0</span><span class="p">),</span></div><div class='line' id='LC576'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kr">int</span><span class="p">(</span><span class="nx">match</span><span class="p">[</span><span class="mi">7</span><span class="p">]</span><span class="o">||</span><span class="mi">0</span><span class="p">));</span></div><div class='line' id='LC577'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">date</span><span class="p">;</span></div><div class='line' id='LC578'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC579'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">string</span><span class="p">;</span></div><div class='line' id='LC580'><span class="p">}</span></div><div class='line' id='LC581'><br/></div><div class='line' id='LC582'><span class="kd">function</span> <span class="kr">int</span><span class="p">(</span><span class="nx">str</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC583'>&nbsp;&nbsp;<span class="k">return</span> <span class="nb">parseInt</span><span class="p">(</span><span class="nx">str</span><span class="p">,</span> <span class="mi">10</span><span class="p">);</span></div><div class='line' id='LC584'><span class="p">}</span></div><div class='line' id='LC585'><br/></div><div class='line' id='LC586'><span class="kd">function</span> <span class="nx">padNumber</span><span class="p">(</span><span class="nx">num</span><span class="p">,</span> <span class="nx">digits</span><span class="p">,</span> <span class="nx">trim</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC587'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">neg</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></div><div class='line' id='LC588'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">num</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC589'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">neg</span> <span class="o">=</span>  <span class="s1">&#39;-&#39;</span><span class="p">;</span></div><div class='line' id='LC590'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">num</span> <span class="o">=</span> <span class="o">-</span><span class="nx">num</span><span class="p">;</span></div><div class='line' id='LC591'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC592'>&nbsp;&nbsp;<span class="nx">num</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">num</span><span class="p">;</span></div><div class='line' id='LC593'>&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">num</span><span class="p">.</span><span class="nx">length</span> <span class="o">&lt;</span> <span class="nx">digits</span><span class="p">)</span> <span class="nx">num</span> <span class="o">=</span> <span class="s1">&#39;0&#39;</span> <span class="o">+</span> <span class="nx">num</span><span class="p">;</span></div><div class='line' id='LC594'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">trim</span><span class="p">)</span></div><div class='line' id='LC595'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">num</span> <span class="o">=</span> <span class="nx">num</span><span class="p">.</span><span class="nx">substr</span><span class="p">(</span><span class="nx">num</span><span class="p">.</span><span class="nx">length</span> <span class="o">-</span> <span class="nx">digits</span><span class="p">);</span></div><div class='line' id='LC596'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">neg</span> <span class="o">+</span> <span class="nx">num</span><span class="p">;</span></div><div class='line' id='LC597'><span class="p">}</span></div><div class='line' id='LC598'><br/></div><div class='line' id='LC599'><br/></div><div class='line' id='LC600'><span class="cm">/**</span></div><div class='line' id='LC601'><span class="cm"> * @ngdoc type</span></div><div class='line' id='LC602'><span class="cm"> * @name angular.mock.TzDate</span></div><div class='line' id='LC603'><span class="cm"> * @description</span></div><div class='line' id='LC604'><span class="cm"> *</span></div><div class='line' id='LC605'><span class="cm"> * *NOTE*: this is not an injectable instance, just a globally available mock class of `Date`.</span></div><div class='line' id='LC606'><span class="cm"> *</span></div><div class='line' id='LC607'><span class="cm"> * Mock of the Date type which has its timezone specified via constructor arg.</span></div><div class='line' id='LC608'><span class="cm"> *</span></div><div class='line' id='LC609'><span class="cm"> * The main purpose is to create Date-like instances with timezone fixed to the specified timezone</span></div><div class='line' id='LC610'><span class="cm"> * offset, so that we can test code that depends on local timezone settings without dependency on</span></div><div class='line' id='LC611'><span class="cm"> * the time zone settings of the machine where the code is running.</span></div><div class='line' id='LC612'><span class="cm"> *</span></div><div class='line' id='LC613'><span class="cm"> * @param {number} offset Offset of the *desired* timezone in hours (fractions will be honored)</span></div><div class='line' id='LC614'><span class="cm"> * @param {(number|string)} timestamp Timestamp representing the desired time in *UTC*</span></div><div class='line' id='LC615'><span class="cm"> *</span></div><div class='line' id='LC616'><span class="cm"> * @example</span></div><div class='line' id='LC617'><span class="cm"> * !!!! WARNING !!!!!</span></div><div class='line' id='LC618'><span class="cm"> * This is not a complete Date object so only methods that were implemented can be called safely.</span></div><div class='line' id='LC619'><span class="cm"> * To make matters worse, TzDate instances inherit stuff from Date via a prototype.</span></div><div class='line' id='LC620'><span class="cm"> *</span></div><div class='line' id='LC621'><span class="cm"> * We do our best to intercept calls to &quot;unimplemented&quot; methods, but since the list of methods is</span></div><div class='line' id='LC622'><span class="cm"> * incomplete we might be missing some non-standard methods. This can result in errors like:</span></div><div class='line' id='LC623'><span class="cm"> * &quot;Date.prototype.foo called on incompatible Object&quot;.</span></div><div class='line' id='LC624'><span class="cm"> *</span></div><div class='line' id='LC625'><span class="cm"> * ```js</span></div><div class='line' id='LC626'><span class="cm"> * var newYearInBratislava = new TzDate(-1, &#39;2009-12-31T23:00:00Z&#39;);</span></div><div class='line' id='LC627'><span class="cm"> * newYearInBratislava.getTimezoneOffset() =&gt; -60;</span></div><div class='line' id='LC628'><span class="cm"> * newYearInBratislava.getFullYear() =&gt; 2010;</span></div><div class='line' id='LC629'><span class="cm"> * newYearInBratislava.getMonth() =&gt; 0;</span></div><div class='line' id='LC630'><span class="cm"> * newYearInBratislava.getDate() =&gt; 1;</span></div><div class='line' id='LC631'><span class="cm"> * newYearInBratislava.getHours() =&gt; 0;</span></div><div class='line' id='LC632'><span class="cm"> * newYearInBratislava.getMinutes() =&gt; 0;</span></div><div class='line' id='LC633'><span class="cm"> * newYearInBratislava.getSeconds() =&gt; 0;</span></div><div class='line' id='LC634'><span class="cm"> * ```</span></div><div class='line' id='LC635'><span class="cm"> *</span></div><div class='line' id='LC636'><span class="cm"> */</span></div><div class='line' id='LC637'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">TzDate</span> <span class="o">=</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">offset</span><span class="p">,</span> <span class="nx">timestamp</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC638'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">self</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC639'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">timestamp</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC640'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">tsStr</span> <span class="o">=</span> <span class="nx">timestamp</span><span class="p">;</span></div><div class='line' id='LC641'><br/></div><div class='line' id='LC642'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span> <span class="o">=</span> <span class="nx">jsonStringToDate</span><span class="p">(</span><span class="nx">timestamp</span><span class="p">);</span></div><div class='line' id='LC643'><br/></div><div class='line' id='LC644'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">timestamp</span> <span class="o">=</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getTime</span><span class="p">();</span></div><div class='line' id='LC645'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">isNaN</span><span class="p">(</span><span class="nx">timestamp</span><span class="p">))</span></div><div class='line' id='LC646'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="p">{</span></div><div class='line' id='LC647'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span><span class="o">:</span> <span class="s2">&quot;Illegal Argument&quot;</span><span class="p">,</span></div><div class='line' id='LC648'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">message</span><span class="o">:</span> <span class="s2">&quot;Arg &#39;&quot;</span> <span class="o">+</span> <span class="nx">tsStr</span> <span class="o">+</span> <span class="s2">&quot;&#39; passed into TzDate constructor is not a valid date string&quot;</span></div><div class='line' id='LC649'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC650'>&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC651'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">timestamp</span><span class="p">);</span></div><div class='line' id='LC652'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC653'><br/></div><div class='line' id='LC654'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">localOffset</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">timestamp</span><span class="p">).</span><span class="nx">getTimezoneOffset</span><span class="p">();</span></div><div class='line' id='LC655'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">offsetDiff</span> <span class="o">=</span> <span class="nx">localOffset</span><span class="o">*</span><span class="mi">60</span><span class="o">*</span><span class="mi">1000</span> <span class="o">-</span> <span class="nx">offset</span><span class="o">*</span><span class="mi">1000</span><span class="o">*</span><span class="mi">60</span><span class="o">*</span><span class="mi">60</span><span class="p">;</span></div><div class='line' id='LC656'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">date</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Date</span><span class="p">(</span><span class="nx">timestamp</span> <span class="o">+</span> <span class="nx">self</span><span class="p">.</span><span class="nx">offsetDiff</span><span class="p">);</span></div><div class='line' id='LC657'><br/></div><div class='line' id='LC658'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getTime</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC659'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getTime</span><span class="p">()</span> <span class="o">-</span> <span class="nx">self</span><span class="p">.</span><span class="nx">offsetDiff</span><span class="p">;</span></div><div class='line' id='LC660'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC661'><br/></div><div class='line' id='LC662'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">toLocaleDateString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC663'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">toLocaleDateString</span><span class="p">();</span></div><div class='line' id='LC664'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC665'><br/></div><div class='line' id='LC666'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getFullYear</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC667'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getFullYear</span><span class="p">();</span></div><div class='line' id='LC668'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC669'><br/></div><div class='line' id='LC670'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getMonth</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC671'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMonth</span><span class="p">();</span></div><div class='line' id='LC672'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC673'><br/></div><div class='line' id='LC674'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC675'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getDate</span><span class="p">();</span></div><div class='line' id='LC676'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC677'><br/></div><div class='line' id='LC678'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getHours</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC679'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getHours</span><span class="p">();</span></div><div class='line' id='LC680'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC681'><br/></div><div class='line' id='LC682'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getMinutes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC683'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMinutes</span><span class="p">();</span></div><div class='line' id='LC684'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC685'><br/></div><div class='line' id='LC686'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getSeconds</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC687'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getSeconds</span><span class="p">();</span></div><div class='line' id='LC688'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC689'><br/></div><div class='line' id='LC690'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getMilliseconds</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getMilliseconds</span><span class="p">();</span></div><div class='line' id='LC692'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC693'><br/></div><div class='line' id='LC694'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getTimezoneOffset</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC695'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">offset</span> <span class="o">*</span> <span class="mi">60</span><span class="p">;</span></div><div class='line' id='LC696'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC697'><br/></div><div class='line' id='LC698'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCFullYear</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC699'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCFullYear</span><span class="p">();</span></div><div class='line' id='LC700'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC701'><br/></div><div class='line' id='LC702'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCMonth</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC703'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCMonth</span><span class="p">();</span></div><div class='line' id='LC704'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC705'><br/></div><div class='line' id='LC706'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCDate</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC707'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCDate</span><span class="p">();</span></div><div class='line' id='LC708'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC709'><br/></div><div class='line' id='LC710'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCHours</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC711'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCHours</span><span class="p">();</span></div><div class='line' id='LC712'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC713'><br/></div><div class='line' id='LC714'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCMinutes</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC715'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCMinutes</span><span class="p">();</span></div><div class='line' id='LC716'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC717'><br/></div><div class='line' id='LC718'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCSeconds</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC719'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCSeconds</span><span class="p">();</span></div><div class='line' id='LC720'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC721'><br/></div><div class='line' id='LC722'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getUTCMilliseconds</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC723'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCMilliseconds</span><span class="p">();</span></div><div class='line' id='LC724'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC725'><br/></div><div class='line' id='LC726'>&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">getDay</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC727'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">.</span><span class="nx">date</span><span class="p">.</span><span class="nx">getDay</span><span class="p">();</span></div><div class='line' id='LC728'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC729'><br/></div><div class='line' id='LC730'>&nbsp;&nbsp;<span class="c1">// provide this method only on browsers that already have it</span></div><div class='line' id='LC731'>&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">toISOString</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC732'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">.</span><span class="nx">toISOString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC733'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCFullYear</span><span class="p">(),</span> <span class="mi">4</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span></div><div class='line' id='LC734'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCMonth</span><span class="p">()</span> <span class="o">+</span> <span class="mi">1</span><span class="p">,</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;-&#39;</span> <span class="o">+</span></div><div class='line' id='LC735'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCDate</span><span class="p">(),</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;T&#39;</span> <span class="o">+</span></div><div class='line' id='LC736'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCHours</span><span class="p">(),</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span></div><div class='line' id='LC737'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCMinutes</span><span class="p">(),</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span></div><div class='line' id='LC738'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCSeconds</span><span class="p">(),</span> <span class="mi">2</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;.&#39;</span> <span class="o">+</span></div><div class='line' id='LC739'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">padNumber</span><span class="p">(</span><span class="nx">self</span><span class="p">.</span><span class="nx">origDate</span><span class="p">.</span><span class="nx">getUTCMilliseconds</span><span class="p">(),</span> <span class="mi">3</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;Z&#39;</span><span class="p">;</span></div><div class='line' id='LC740'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC741'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC742'><br/></div><div class='line' id='LC743'>&nbsp;&nbsp;<span class="c1">//hide all methods not implemented in this mock that the Date prototype exposes</span></div><div class='line' id='LC744'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">unimplementedMethods</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;getUTCDay&#39;</span><span class="p">,</span></div><div class='line' id='LC745'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;getYear&#39;</span><span class="p">,</span> <span class="s1">&#39;setDate&#39;</span><span class="p">,</span> <span class="s1">&#39;setFullYear&#39;</span><span class="p">,</span> <span class="s1">&#39;setHours&#39;</span><span class="p">,</span> <span class="s1">&#39;setMilliseconds&#39;</span><span class="p">,</span></div><div class='line' id='LC746'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;setMinutes&#39;</span><span class="p">,</span> <span class="s1">&#39;setMonth&#39;</span><span class="p">,</span> <span class="s1">&#39;setSeconds&#39;</span><span class="p">,</span> <span class="s1">&#39;setTime&#39;</span><span class="p">,</span> <span class="s1">&#39;setUTCDate&#39;</span><span class="p">,</span> <span class="s1">&#39;setUTCFullYear&#39;</span><span class="p">,</span></div><div class='line' id='LC747'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;setUTCHours&#39;</span><span class="p">,</span> <span class="s1">&#39;setUTCMilliseconds&#39;</span><span class="p">,</span> <span class="s1">&#39;setUTCMinutes&#39;</span><span class="p">,</span> <span class="s1">&#39;setUTCMonth&#39;</span><span class="p">,</span> <span class="s1">&#39;setUTCSeconds&#39;</span><span class="p">,</span></div><div class='line' id='LC748'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;setYear&#39;</span><span class="p">,</span> <span class="s1">&#39;toDateString&#39;</span><span class="p">,</span> <span class="s1">&#39;toGMTString&#39;</span><span class="p">,</span> <span class="s1">&#39;toJSON&#39;</span><span class="p">,</span> <span class="s1">&#39;toLocaleFormat&#39;</span><span class="p">,</span> <span class="s1">&#39;toLocaleString&#39;</span><span class="p">,</span></div><div class='line' id='LC749'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;toLocaleTimeString&#39;</span><span class="p">,</span> <span class="s1">&#39;toSource&#39;</span><span class="p">,</span> <span class="s1">&#39;toString&#39;</span><span class="p">,</span> <span class="s1">&#39;toTimeString&#39;</span><span class="p">,</span> <span class="s1">&#39;toUTCString&#39;</span><span class="p">,</span> <span class="s1">&#39;valueOf&#39;</span><span class="p">];</span></div><div class='line' id='LC750'><br/></div><div class='line' id='LC751'>&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">unimplementedMethods</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">methodName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC752'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">self</span><span class="p">[</span><span class="nx">methodName</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC753'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s2">&quot;Method &#39;&quot;</span> <span class="o">+</span> <span class="nx">methodName</span> <span class="o">+</span> <span class="s2">&quot;&#39; is not implemented in the TzDate mock&quot;</span><span class="p">);</span></div><div class='line' id='LC754'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC755'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC756'><br/></div><div class='line' id='LC757'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">self</span><span class="p">;</span></div><div class='line' id='LC758'><span class="p">};</span></div><div class='line' id='LC759'><br/></div><div class='line' id='LC760'><span class="c1">//make &quot;tzDateInstance instanceof Date&quot; return true</span></div><div class='line' id='LC761'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">TzDate</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="nb">Date</span><span class="p">.</span><span class="nx">prototype</span><span class="p">;</span></div><div class='line' id='LC762'><span class="cm">/* jshint +W101 */</span></div><div class='line' id='LC763'><br/></div><div class='line' id='LC764'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">animate</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngAnimateMock&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">])</span></div><div class='line' id='LC765'><br/></div><div class='line' id='LC766'>&nbsp;&nbsp;<span class="p">.</span><span class="nx">config</span><span class="p">([</span><span class="s1">&#39;$provide&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$provide</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC767'><br/></div><div class='line' id='LC768'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">reflowQueue</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC769'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">value</span><span class="p">(</span><span class="s1">&#39;$$animateReflow&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC770'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">reflowQueue</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC771'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reflowQueue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC772'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span> <span class="nx">cancel</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC773'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reflowQueue</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC774'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC775'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC776'><br/></div><div class='line' id='LC777'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">decorator</span><span class="p">(</span><span class="s1">&#39;$animate&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$delegate</span><span class="p">,</span> <span class="nx">$$asyncCallback</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC778'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">animate</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC779'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queue</span> <span class="o">:</span> <span class="p">[],</span></div><div class='line' id='LC780'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">enabled</span> <span class="o">:</span> <span class="nx">$delegate</span><span class="p">.</span><span class="nx">enabled</span><span class="p">,</span></div><div class='line' id='LC781'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">triggerCallbacks</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC782'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$$asyncCallback</span><span class="p">.</span><span class="nx">flush</span><span class="p">();</span></div><div class='line' id='LC783'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">},</span></div><div class='line' id='LC784'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">triggerReflow</span> <span class="o">:</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC785'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">reflowQueue</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC786'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC787'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC788'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">reflowQueue</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC789'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC790'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC791'><br/></div><div class='line' id='LC792'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span></div><div class='line' id='LC793'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">[</span><span class="s1">&#39;enter&#39;</span><span class="p">,</span><span class="s1">&#39;leave&#39;</span><span class="p">,</span><span class="s1">&#39;move&#39;</span><span class="p">,</span><span class="s1">&#39;addClass&#39;</span><span class="p">,</span><span class="s1">&#39;removeClass&#39;</span><span class="p">,</span><span class="s1">&#39;setClass&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC794'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">animate</span><span class="p">[</span><span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC795'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">animate</span><span class="p">.</span><span class="nx">queue</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></div><div class='line' id='LC796'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">event</span> <span class="o">:</span> <span class="nx">method</span><span class="p">,</span></div><div class='line' id='LC797'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">element</span> <span class="o">:</span> <span class="nx">arguments</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC798'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">args</span> <span class="o">:</span> <span class="nx">arguments</span></div><div class='line' id='LC799'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC800'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$delegate</span><span class="p">[</span><span class="nx">method</span><span class="p">].</span><span class="nx">apply</span><span class="p">(</span><span class="nx">$delegate</span><span class="p">,</span> <span class="nx">arguments</span><span class="p">);</span></div><div class='line' id='LC801'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC802'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC803'><br/></div><div class='line' id='LC804'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">animate</span><span class="p">;</span></div><div class='line' id='LC805'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC806'><br/></div><div class='line' id='LC807'>&nbsp;&nbsp;<span class="p">}]);</span></div><div class='line' id='LC808'><br/></div><div class='line' id='LC809'><br/></div><div class='line' id='LC810'><span class="cm">/**</span></div><div class='line' id='LC811'><span class="cm"> * @ngdoc function</span></div><div class='line' id='LC812'><span class="cm"> * @name angular.mock.dump</span></div><div class='line' id='LC813'><span class="cm"> * @description</span></div><div class='line' id='LC814'><span class="cm"> *</span></div><div class='line' id='LC815'><span class="cm"> * *NOTE*: this is not an injectable instance, just a globally available function.</span></div><div class='line' id='LC816'><span class="cm"> *</span></div><div class='line' id='LC817'><span class="cm"> * Method for serializing common angular objects (scope, elements, etc..) into strings, useful for</span></div><div class='line' id='LC818'><span class="cm"> * debugging.</span></div><div class='line' id='LC819'><span class="cm"> *</span></div><div class='line' id='LC820'><span class="cm"> * This method is also available on window, where it can be used to display objects on debug</span></div><div class='line' id='LC821'><span class="cm"> * console.</span></div><div class='line' id='LC822'><span class="cm"> *</span></div><div class='line' id='LC823'><span class="cm"> * @param {*} object - any object to turn into string.</span></div><div class='line' id='LC824'><span class="cm"> * @return {string} a serialized string of the argument</span></div><div class='line' id='LC825'><span class="cm"> */</span></div><div class='line' id='LC826'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">dump</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC827'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">serialize</span><span class="p">(</span><span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC828'><br/></div><div class='line' id='LC829'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">serialize</span><span class="p">(</span><span class="nx">object</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC830'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC831'><br/></div><div class='line' id='LC832'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isElement</span><span class="p">(</span><span class="nx">object</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC833'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">object</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC834'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="s1">&#39;&lt;div&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC835'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">object</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">element</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC836'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span><span class="p">.</span><span class="nx">append</span><span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="nx">element</span><span class="p">).</span><span class="nx">clone</span><span class="p">());</span></div><div class='line' id='LC837'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC838'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nx">out</span><span class="p">.</span><span class="nx">html</span><span class="p">();</span></div><div class='line' id='LC839'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">object</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC840'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC841'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">object</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">o</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC842'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">serialize</span><span class="p">(</span><span class="nx">o</span><span class="p">));</span></div><div class='line' id='LC843'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC844'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="s1">&#39;[ &#39;</span> <span class="o">+</span> <span class="nx">out</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39; ]&#39;</span><span class="p">;</span></div><div class='line' id='LC845'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">object</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC846'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">object</span><span class="p">.</span><span class="nx">$eval</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">object</span><span class="p">.</span><span class="nx">$apply</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC847'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nx">serializeScope</span><span class="p">(</span><span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC848'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">object</span> <span class="k">instanceof</span> <span class="nb">Error</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC849'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nx">object</span><span class="p">.</span><span class="nx">stack</span> <span class="o">||</span> <span class="p">(</span><span class="s1">&#39;&#39;</span> <span class="o">+</span> <span class="nx">object</span><span class="p">.</span><span class="nx">name</span> <span class="o">+</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">object</span><span class="p">.</span><span class="nx">message</span><span class="p">);</span></div><div class='line' id='LC850'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC851'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// TODO(i): this prevents methods being logged,</span></div><div class='line' id='LC852'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// we should have a better way to serialize objects</span></div><div class='line' id='LC853'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">toJson</span><span class="p">(</span><span class="nx">object</span><span class="p">,</span> <span class="kc">true</span><span class="p">);</span></div><div class='line' id='LC854'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC855'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC856'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">out</span> <span class="o">=</span> <span class="nb">String</span><span class="p">(</span><span class="nx">object</span><span class="p">);</span></div><div class='line' id='LC857'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC858'><br/></div><div class='line' id='LC859'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">out</span><span class="p">;</span></div><div class='line' id='LC860'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC861'><br/></div><div class='line' id='LC862'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">serializeScope</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">offset</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC863'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">offset</span> <span class="o">=</span> <span class="nx">offset</span> <span class="o">||</span>  <span class="s1">&#39;  &#39;</span><span class="p">;</span></div><div class='line' id='LC864'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">log</span> <span class="o">=</span> <span class="p">[</span><span class="nx">offset</span> <span class="o">+</span> <span class="s1">&#39;Scope(&#39;</span> <span class="o">+</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">$id</span> <span class="o">+</span> <span class="s1">&#39;): {&#39;</span><span class="p">];</span></div><div class='line' id='LC865'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span> <span class="kd">var</span> <span class="nx">key</span> <span class="k">in</span> <span class="nx">scope</span> <span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC866'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">scope</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">key</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="sr">/^(\$|this)/</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC867'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">log</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;  &#39;</span> <span class="o">+</span> <span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">toJson</span><span class="p">(</span><span class="nx">scope</span><span class="p">[</span><span class="nx">key</span><span class="p">]));</span></div><div class='line' id='LC868'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC869'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC870'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">child</span> <span class="o">=</span> <span class="nx">scope</span><span class="p">.</span><span class="nx">$$childHead</span><span class="p">;</span></div><div class='line' id='LC871'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span><span class="p">(</span><span class="nx">child</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC872'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">log</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">serializeScope</span><span class="p">(</span><span class="nx">child</span><span class="p">,</span> <span class="nx">offset</span> <span class="o">+</span> <span class="s1">&#39;  &#39;</span><span class="p">));</span></div><div class='line' id='LC873'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">child</span> <span class="o">=</span> <span class="nx">child</span><span class="p">.</span><span class="nx">$$nextSibling</span><span class="p">;</span></div><div class='line' id='LC874'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC875'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">log</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;}&#39;</span><span class="p">);</span></div><div class='line' id='LC876'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">log</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">offset</span><span class="p">);</span></div><div class='line' id='LC877'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC878'><span class="p">};</span></div><div class='line' id='LC879'><br/></div><div class='line' id='LC880'><span class="cm">/**</span></div><div class='line' id='LC881'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC882'><span class="cm"> * @name $httpBackend</span></div><div class='line' id='LC883'><span class="cm"> * @description</span></div><div class='line' id='LC884'><span class="cm"> * Fake HTTP backend implementation suitable for unit testing applications that use the</span></div><div class='line' id='LC885'><span class="cm"> * {@link ng.$http $http service}.</span></div><div class='line' id='LC886'><span class="cm"> *</span></div><div class='line' id='LC887'><span class="cm"> * *Note*: For fake HTTP backend implementation suitable for end-to-end testing or backend-less</span></div><div class='line' id='LC888'><span class="cm"> * development please see {@link ngMockE2E.$httpBackend e2e $httpBackend mock}.</span></div><div class='line' id='LC889'><span class="cm"> *</span></div><div class='line' id='LC890'><span class="cm"> * During unit testing, we want our unit tests to run quickly and have no external dependencies so</span></div><div class='line' id='LC891'><span class="cm"> * we don’t want to send [XHR](https://developer.mozilla.org/en/xmlhttprequest) or</span></div><div class='line' id='LC892'><span class="cm"> * [JSONP](http://en.wikipedia.org/wiki/JSONP) requests to a real server. All we really need is</span></div><div class='line' id='LC893'><span class="cm"> * to verify whether a certain request has been sent or not, or alternatively just let the</span></div><div class='line' id='LC894'><span class="cm"> * application make requests, respond with pre-trained responses and assert that the end result is</span></div><div class='line' id='LC895'><span class="cm"> * what we expect it to be.</span></div><div class='line' id='LC896'><span class="cm"> *</span></div><div class='line' id='LC897'><span class="cm"> * This mock implementation can be used to respond with static or dynamic responses via the</span></div><div class='line' id='LC898'><span class="cm"> * `expect` and `when` apis and their shortcuts (`expectGET`, `whenPOST`, etc).</span></div><div class='line' id='LC899'><span class="cm"> *</span></div><div class='line' id='LC900'><span class="cm"> * When an Angular application needs some data from a server, it calls the $http service, which</span></div><div class='line' id='LC901'><span class="cm"> * sends the request to a real server using $httpBackend service. With dependency injection, it is</span></div><div class='line' id='LC902'><span class="cm"> * easy to inject $httpBackend mock (which has the same API as $httpBackend) and use it to verify</span></div><div class='line' id='LC903'><span class="cm"> * the requests and respond with some testing data without sending a request to real server.</span></div><div class='line' id='LC904'><span class="cm"> *</span></div><div class='line' id='LC905'><span class="cm"> * There are two ways to specify what test data should be returned as http responses by the mock</span></div><div class='line' id='LC906'><span class="cm"> * backend when the code under test makes http requests:</span></div><div class='line' id='LC907'><span class="cm"> *</span></div><div class='line' id='LC908'><span class="cm"> * - `$httpBackend.expect` - specifies a request expectation</span></div><div class='line' id='LC909'><span class="cm"> * - `$httpBackend.when` - specifies a backend definition</span></div><div class='line' id='LC910'><span class="cm"> *</span></div><div class='line' id='LC911'><span class="cm"> *</span></div><div class='line' id='LC912'><span class="cm"> * # Request Expectations vs Backend Definitions</span></div><div class='line' id='LC913'><span class="cm"> *</span></div><div class='line' id='LC914'><span class="cm"> * Request expectations provide a way to make assertions about requests made by the application and</span></div><div class='line' id='LC915'><span class="cm"> * to define responses for those requests. The test will fail if the expected requests are not made</span></div><div class='line' id='LC916'><span class="cm"> * or they are made in the wrong order.</span></div><div class='line' id='LC917'><span class="cm"> *</span></div><div class='line' id='LC918'><span class="cm"> * Backend definitions allow you to define a fake backend for your application which doesn&#39;t assert</span></div><div class='line' id='LC919'><span class="cm"> * if a particular request was made or not, it just returns a trained response if a request is made.</span></div><div class='line' id='LC920'><span class="cm"> * The test will pass whether or not the request gets made during testing.</span></div><div class='line' id='LC921'><span class="cm"> *</span></div><div class='line' id='LC922'><span class="cm"> *</span></div><div class='line' id='LC923'><span class="cm"> * &lt;table class=&quot;table&quot;&gt;</span></div><div class='line' id='LC924'><span class="cm"> *   &lt;tr&gt;&lt;th width=&quot;220px&quot;&gt;&lt;/th&gt;&lt;th&gt;Request expectations&lt;/th&gt;&lt;th&gt;Backend definitions&lt;/th&gt;&lt;/tr&gt;</span></div><div class='line' id='LC925'><span class="cm"> *   &lt;tr&gt;</span></div><div class='line' id='LC926'><span class="cm"> *     &lt;th&gt;Syntax&lt;/th&gt;</span></div><div class='line' id='LC927'><span class="cm"> *     &lt;td&gt;.expect(...).respond(...)&lt;/td&gt;</span></div><div class='line' id='LC928'><span class="cm"> *     &lt;td&gt;.when(...).respond(...)&lt;/td&gt;</span></div><div class='line' id='LC929'><span class="cm"> *   &lt;/tr&gt;</span></div><div class='line' id='LC930'><span class="cm"> *   &lt;tr&gt;</span></div><div class='line' id='LC931'><span class="cm"> *     &lt;th&gt;Typical usage&lt;/th&gt;</span></div><div class='line' id='LC932'><span class="cm"> *     &lt;td&gt;strict unit tests&lt;/td&gt;</span></div><div class='line' id='LC933'><span class="cm"> *     &lt;td&gt;loose (black-box) unit testing&lt;/td&gt;</span></div><div class='line' id='LC934'><span class="cm"> *   &lt;/tr&gt;</span></div><div class='line' id='LC935'><span class="cm"> *   &lt;tr&gt;</span></div><div class='line' id='LC936'><span class="cm"> *     &lt;th&gt;Fulfills multiple requests&lt;/th&gt;</span></div><div class='line' id='LC937'><span class="cm"> *     &lt;td&gt;NO&lt;/td&gt;</span></div><div class='line' id='LC938'><span class="cm"> *     &lt;td&gt;YES&lt;/td&gt;</span></div><div class='line' id='LC939'><span class="cm"> *   &lt;/tr&gt;</span></div><div class='line' id='LC940'><span class="cm"> *   &lt;tr&gt;</span></div><div class='line' id='LC941'><span class="cm"> *     &lt;th&gt;Order of requests matters&lt;/th&gt;</span></div><div class='line' id='LC942'><span class="cm"> *     &lt;td&gt;YES&lt;/td&gt;</span></div><div class='line' id='LC943'><span class="cm"> *     &lt;td&gt;NO&lt;/td&gt;</span></div><div class='line' id='LC944'><span class="cm"> *   &lt;/tr&gt;</span></div><div class='line' id='LC945'><span class="cm"> *   &lt;tr&gt;</span></div><div class='line' id='LC946'><span class="cm"> *     &lt;th&gt;Request required&lt;/th&gt;</span></div><div class='line' id='LC947'><span class="cm"> *     &lt;td&gt;YES&lt;/td&gt;</span></div><div class='line' id='LC948'><span class="cm"> *     &lt;td&gt;NO&lt;/td&gt;</span></div><div class='line' id='LC949'><span class="cm"> *   &lt;/tr&gt;</span></div><div class='line' id='LC950'><span class="cm"> *   &lt;tr&gt;</span></div><div class='line' id='LC951'><span class="cm"> *     &lt;th&gt;Response required&lt;/th&gt;</span></div><div class='line' id='LC952'><span class="cm"> *     &lt;td&gt;optional (see below)&lt;/td&gt;</span></div><div class='line' id='LC953'><span class="cm"> *     &lt;td&gt;YES&lt;/td&gt;</span></div><div class='line' id='LC954'><span class="cm"> *   &lt;/tr&gt;</span></div><div class='line' id='LC955'><span class="cm"> * &lt;/table&gt;</span></div><div class='line' id='LC956'><span class="cm"> *</span></div><div class='line' id='LC957'><span class="cm"> * In cases where both backend definitions and request expectations are specified during unit</span></div><div class='line' id='LC958'><span class="cm"> * testing, the request expectations are evaluated first.</span></div><div class='line' id='LC959'><span class="cm"> *</span></div><div class='line' id='LC960'><span class="cm"> * If a request expectation has no response specified, the algorithm will search your backend</span></div><div class='line' id='LC961'><span class="cm"> * definitions for an appropriate response.</span></div><div class='line' id='LC962'><span class="cm"> *</span></div><div class='line' id='LC963'><span class="cm"> * If a request didn&#39;t match any expectation or if the expectation doesn&#39;t have the response</span></div><div class='line' id='LC964'><span class="cm"> * defined, the backend definitions are evaluated in sequential order to see if any of them match</span></div><div class='line' id='LC965'><span class="cm"> * the request. The response from the first matched definition is returned.</span></div><div class='line' id='LC966'><span class="cm"> *</span></div><div class='line' id='LC967'><span class="cm"> *</span></div><div class='line' id='LC968'><span class="cm"> * # Flushing HTTP requests</span></div><div class='line' id='LC969'><span class="cm"> *</span></div><div class='line' id='LC970'><span class="cm"> * The $httpBackend used in production always responds to requests asynchronously. If we preserved</span></div><div class='line' id='LC971'><span class="cm"> * this behavior in unit testing, we&#39;d have to create async unit tests, which are hard to write,</span></div><div class='line' id='LC972'><span class="cm"> * to follow and to maintain. But neither can the testing mock respond synchronously; that would</span></div><div class='line' id='LC973'><span class="cm"> * change the execution of the code under test. For this reason, the mock $httpBackend has a</span></div><div class='line' id='LC974'><span class="cm"> * `flush()` method, which allows the test to explicitly flush pending requests. This preserves</span></div><div class='line' id='LC975'><span class="cm"> * the async api of the backend, while allowing the test to execute synchronously.</span></div><div class='line' id='LC976'><span class="cm"> *</span></div><div class='line' id='LC977'><span class="cm"> *</span></div><div class='line' id='LC978'><span class="cm"> * # Unit testing with mock $httpBackend</span></div><div class='line' id='LC979'><span class="cm"> * The following code shows how to setup and use the mock backend when unit testing a controller.</span></div><div class='line' id='LC980'><span class="cm"> * First we create the controller under test:</span></div><div class='line' id='LC981'><span class="cm"> *</span></div><div class='line' id='LC982'><span class="cm">  ```js</span></div><div class='line' id='LC983'><span class="cm">  // The controller code</span></div><div class='line' id='LC984'><span class="cm">  function MyController($scope, $http) {</span></div><div class='line' id='LC985'><span class="cm">    var authToken;</span></div><div class='line' id='LC986'><br/></div><div class='line' id='LC987'><span class="cm">    $http.get(&#39;/auth.py&#39;).success(function(data, status, headers) {</span></div><div class='line' id='LC988'><span class="cm">      authToken = headers(&#39;A-Token&#39;);</span></div><div class='line' id='LC989'><span class="cm">      $scope.user = data;</span></div><div class='line' id='LC990'><span class="cm">    });</span></div><div class='line' id='LC991'><br/></div><div class='line' id='LC992'><span class="cm">    $scope.saveMessage = function(message) {</span></div><div class='line' id='LC993'><span class="cm">      var headers = { &#39;Authorization&#39;: authToken };</span></div><div class='line' id='LC994'><span class="cm">      $scope.status = &#39;Saving...&#39;;</span></div><div class='line' id='LC995'><br/></div><div class='line' id='LC996'><span class="cm">      $http.post(&#39;/add-msg.py&#39;, message, { headers: headers } ).success(function(response) {</span></div><div class='line' id='LC997'><span class="cm">        $scope.status = &#39;&#39;;</span></div><div class='line' id='LC998'><span class="cm">      }).error(function() {</span></div><div class='line' id='LC999'><span class="cm">        $scope.status = &#39;ERROR!&#39;;</span></div><div class='line' id='LC1000'><span class="cm">      });</span></div><div class='line' id='LC1001'><span class="cm">    };</span></div><div class='line' id='LC1002'><span class="cm">  }</span></div><div class='line' id='LC1003'><span class="cm">  ```</span></div><div class='line' id='LC1004'><span class="cm"> *</span></div><div class='line' id='LC1005'><span class="cm"> * Now we setup the mock backend and create the test specs:</span></div><div class='line' id='LC1006'><span class="cm"> *</span></div><div class='line' id='LC1007'><span class="cm">  ```js</span></div><div class='line' id='LC1008'><span class="cm">    // testing controller</span></div><div class='line' id='LC1009'><span class="cm">    describe(&#39;MyController&#39;, function() {</span></div><div class='line' id='LC1010'><span class="cm">       var $httpBackend, $rootScope, createController;</span></div><div class='line' id='LC1011'><br/></div><div class='line' id='LC1012'><span class="cm">       beforeEach(inject(function($injector) {</span></div><div class='line' id='LC1013'><span class="cm">         // Set up the mock http service responses</span></div><div class='line' id='LC1014'><span class="cm">         $httpBackend = $injector.get(&#39;$httpBackend&#39;);</span></div><div class='line' id='LC1015'><span class="cm">         // backend definition common for all tests</span></div><div class='line' id='LC1016'><span class="cm">         $httpBackend.when(&#39;GET&#39;, &#39;/auth.py&#39;).respond({userId: &#39;userX&#39;}, {&#39;A-Token&#39;: &#39;xxx&#39;});</span></div><div class='line' id='LC1017'><br/></div><div class='line' id='LC1018'><span class="cm">         // Get hold of a scope (i.e. the root scope)</span></div><div class='line' id='LC1019'><span class="cm">         $rootScope = $injector.get(&#39;$rootScope&#39;);</span></div><div class='line' id='LC1020'><span class="cm">         // The $controller service is used to create instances of controllers</span></div><div class='line' id='LC1021'><span class="cm">         var $controller = $injector.get(&#39;$controller&#39;);</span></div><div class='line' id='LC1022'><br/></div><div class='line' id='LC1023'><span class="cm">         createController = function() {</span></div><div class='line' id='LC1024'><span class="cm">           return $controller(&#39;MyController&#39;, {&#39;$scope&#39; : $rootScope });</span></div><div class='line' id='LC1025'><span class="cm">         };</span></div><div class='line' id='LC1026'><span class="cm">       }));</span></div><div class='line' id='LC1027'><br/></div><div class='line' id='LC1028'><br/></div><div class='line' id='LC1029'><span class="cm">       afterEach(function() {</span></div><div class='line' id='LC1030'><span class="cm">         $httpBackend.verifyNoOutstandingExpectation();</span></div><div class='line' id='LC1031'><span class="cm">         $httpBackend.verifyNoOutstandingRequest();</span></div><div class='line' id='LC1032'><span class="cm">       });</span></div><div class='line' id='LC1033'><br/></div><div class='line' id='LC1034'><br/></div><div class='line' id='LC1035'><span class="cm">       it(&#39;should fetch authentication token&#39;, function() {</span></div><div class='line' id='LC1036'><span class="cm">         $httpBackend.expectGET(&#39;/auth.py&#39;);</span></div><div class='line' id='LC1037'><span class="cm">         var controller = createController();</span></div><div class='line' id='LC1038'><span class="cm">         $httpBackend.flush();</span></div><div class='line' id='LC1039'><span class="cm">       });</span></div><div class='line' id='LC1040'><br/></div><div class='line' id='LC1041'><br/></div><div class='line' id='LC1042'><span class="cm">       it(&#39;should send msg to server&#39;, function() {</span></div><div class='line' id='LC1043'><span class="cm">         var controller = createController();</span></div><div class='line' id='LC1044'><span class="cm">         $httpBackend.flush();</span></div><div class='line' id='LC1045'><br/></div><div class='line' id='LC1046'><span class="cm">         // now you don’t care about the authentication, but</span></div><div class='line' id='LC1047'><span class="cm">         // the controller will still send the request and</span></div><div class='line' id='LC1048'><span class="cm">         // $httpBackend will respond without you having to</span></div><div class='line' id='LC1049'><span class="cm">         // specify the expectation and response for this request</span></div><div class='line' id='LC1050'><br/></div><div class='line' id='LC1051'><span class="cm">         $httpBackend.expectPOST(&#39;/add-msg.py&#39;, &#39;message content&#39;).respond(201, &#39;&#39;);</span></div><div class='line' id='LC1052'><span class="cm">         $rootScope.saveMessage(&#39;message content&#39;);</span></div><div class='line' id='LC1053'><span class="cm">         expect($rootScope.status).toBe(&#39;Saving...&#39;);</span></div><div class='line' id='LC1054'><span class="cm">         $httpBackend.flush();</span></div><div class='line' id='LC1055'><span class="cm">         expect($rootScope.status).toBe(&#39;&#39;);</span></div><div class='line' id='LC1056'><span class="cm">       });</span></div><div class='line' id='LC1057'><br/></div><div class='line' id='LC1058'><br/></div><div class='line' id='LC1059'><span class="cm">       it(&#39;should send auth header&#39;, function() {</span></div><div class='line' id='LC1060'><span class="cm">         var controller = createController();</span></div><div class='line' id='LC1061'><span class="cm">         $httpBackend.flush();</span></div><div class='line' id='LC1062'><br/></div><div class='line' id='LC1063'><span class="cm">         $httpBackend.expectPOST(&#39;/add-msg.py&#39;, undefined, function(headers) {</span></div><div class='line' id='LC1064'><span class="cm">           // check if the header was send, if it wasn&#39;t the expectation won&#39;t</span></div><div class='line' id='LC1065'><span class="cm">           // match the request and the test will fail</span></div><div class='line' id='LC1066'><span class="cm">           return headers[&#39;Authorization&#39;] == &#39;xxx&#39;;</span></div><div class='line' id='LC1067'><span class="cm">         }).respond(201, &#39;&#39;);</span></div><div class='line' id='LC1068'><br/></div><div class='line' id='LC1069'><span class="cm">         $rootScope.saveMessage(&#39;whatever&#39;);</span></div><div class='line' id='LC1070'><span class="cm">         $httpBackend.flush();</span></div><div class='line' id='LC1071'><span class="cm">       });</span></div><div class='line' id='LC1072'><span class="cm">    });</span></div><div class='line' id='LC1073'><span class="cm">   ```</span></div><div class='line' id='LC1074'><span class="cm"> */</span></div><div class='line' id='LC1075'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$HttpBackendProvider</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1076'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="p">[</span><span class="s1">&#39;$rootScope&#39;</span><span class="p">,</span> <span class="nx">createHttpBackendMock</span><span class="p">];</span></div><div class='line' id='LC1077'><span class="p">};</span></div><div class='line' id='LC1078'><br/></div><div class='line' id='LC1079'><span class="cm">/**</span></div><div class='line' id='LC1080'><span class="cm"> * General factory function for $httpBackend mock.</span></div><div class='line' id='LC1081'><span class="cm"> * Returns instance for unit testing (when no arguments specified):</span></div><div class='line' id='LC1082'><span class="cm"> *   - passing through is disabled</span></div><div class='line' id='LC1083'><span class="cm"> *   - auto flushing is disabled</span></div><div class='line' id='LC1084'><span class="cm"> *</span></div><div class='line' id='LC1085'><span class="cm"> * Returns instance for e2e testing (when `$delegate` and `$browser` specified):</span></div><div class='line' id='LC1086'><span class="cm"> *   - passing through (delegating request to real backend) is enabled</span></div><div class='line' id='LC1087'><span class="cm"> *   - auto flushing is enabled</span></div><div class='line' id='LC1088'><span class="cm"> *</span></div><div class='line' id='LC1089'><span class="cm"> * @param {Object=} $delegate Real $httpBackend instance (allow passing through if specified)</span></div><div class='line' id='LC1090'><span class="cm"> * @param {Object=} $browser Auto-flushing enabled if specified</span></div><div class='line' id='LC1091'><span class="cm"> * @return {Object} Instance of $httpBackend mock</span></div><div class='line' id='LC1092'><span class="cm"> */</span></div><div class='line' id='LC1093'><span class="kd">function</span> <span class="nx">createHttpBackendMock</span><span class="p">(</span><span class="nx">$rootScope</span><span class="p">,</span> <span class="nx">$delegate</span><span class="p">,</span> <span class="nx">$browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1094'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">definitions</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1095'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expectations</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1096'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responses</span> <span class="o">=</span> <span class="p">[],</span></div><div class='line' id='LC1097'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responsesPush</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">bind</span><span class="p">(</span><span class="nx">responses</span><span class="p">,</span> <span class="nx">responses</span><span class="p">.</span><span class="nx">push</span><span class="p">),</span></div><div class='line' id='LC1098'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">copy</span><span class="p">;</span></div><div class='line' id='LC1099'><br/></div><div class='line' id='LC1100'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">createResponse</span><span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">statusText</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1101'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">status</span><span class="p">))</span> <span class="k">return</span> <span class="nx">status</span><span class="p">;</span></div><div class='line' id='LC1102'><br/></div><div class='line' id='LC1103'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1104'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isNumber</span><span class="p">(</span><span class="nx">status</span><span class="p">)</span></div><div class='line' id='LC1105'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="p">[</span><span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">statusText</span><span class="p">]</span></div><div class='line' id='LC1106'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="p">[</span><span class="mi">200</span><span class="p">,</span> <span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">];</span></div><div class='line' id='LC1107'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1108'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1109'><br/></div><div class='line' id='LC1110'>&nbsp;&nbsp;<span class="c1">// TODO(vojta): change params to: method, url, data, headers, callback</span></div><div class='line' id='LC1111'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">$httpBackend</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">withCredentials</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1112'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">xhr</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">MockXhr</span><span class="p">(),</span></div><div class='line' id='LC1113'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expectation</span> <span class="o">=</span> <span class="nx">expectations</span><span class="p">[</span><span class="mi">0</span><span class="p">],</span></div><div class='line' id='LC1114'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasExpected</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1115'><br/></div><div class='line' id='LC1116'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">prettyPrint</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1117'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">||</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="o">||</span> <span class="nx">data</span> <span class="k">instanceof</span> <span class="nb">RegExp</span><span class="p">)</span></div><div class='line' id='LC1118'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">?</span> <span class="nx">data</span></div><div class='line' id='LC1119'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">toJson</span><span class="p">(</span><span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1120'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1121'><br/></div><div class='line' id='LC1122'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">wrapResponse</span><span class="p">(</span><span class="nx">wrapped</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1123'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">$browser</span> <span class="o">&amp;&amp;</span> <span class="nx">timeout</span> <span class="o">&amp;&amp;</span> <span class="nx">timeout</span><span class="p">.</span><span class="nx">then</span><span class="p">)</span> <span class="nx">timeout</span><span class="p">.</span><span class="nx">then</span><span class="p">(</span><span class="nx">handleTimeout</span><span class="p">);</span></div><div class='line' id='LC1124'><br/></div><div class='line' id='LC1125'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">handleResponse</span><span class="p">;</span></div><div class='line' id='LC1126'><br/></div><div class='line' id='LC1127'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">handleResponse</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1128'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">response</span> <span class="o">=</span> <span class="nx">wrapped</span><span class="p">.</span><span class="nx">response</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC1129'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">xhr</span><span class="p">.</span><span class="nx">$$respHeaders</span> <span class="o">=</span> <span class="nx">response</span><span class="p">[</span><span class="mi">2</span><span class="p">];</span></div><div class='line' id='LC1130'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="nx">copy</span><span class="p">(</span><span class="nx">response</span><span class="p">[</span><span class="mi">0</span><span class="p">]),</span> <span class="nx">copy</span><span class="p">(</span><span class="nx">response</span><span class="p">[</span><span class="mi">1</span><span class="p">]),</span> <span class="nx">xhr</span><span class="p">.</span><span class="nx">getAllResponseHeaders</span><span class="p">(),</span></div><div class='line' id='LC1131'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">copy</span><span class="p">(</span><span class="nx">response</span><span class="p">[</span><span class="mi">3</span><span class="p">]</span> <span class="o">||</span> <span class="s1">&#39;&#39;</span><span class="p">));</span></div><div class='line' id='LC1132'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1133'><br/></div><div class='line' id='LC1134'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">handleTimeout</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1135'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">responses</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1136'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">responses</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">===</span> <span class="nx">handleResponse</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1137'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responses</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">i</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1138'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callback</span><span class="p">(</span><span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">,</span> <span class="s1">&#39;&#39;</span><span class="p">);</span></div><div class='line' id='LC1139'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">break</span><span class="p">;</span></div><div class='line' id='LC1140'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1141'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1142'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1143'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1144'><br/></div><div class='line' id='LC1145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">expectation</span> <span class="o">&amp;&amp;</span> <span class="nx">expectation</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1146'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">expectation</span><span class="p">.</span><span class="nx">matchData</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span></div><div class='line' id='LC1147'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Expected &#39;</span> <span class="o">+</span> <span class="nx">expectation</span> <span class="o">+</span> <span class="s1">&#39; with different data\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC1148'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;EXPECTED: &#39;</span> <span class="o">+</span> <span class="nx">prettyPrint</span><span class="p">(</span><span class="nx">expectation</span><span class="p">.</span><span class="nx">data</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\nGOT:      &#39;</span> <span class="o">+</span> <span class="nx">data</span><span class="p">);</span></div><div class='line' id='LC1149'><br/></div><div class='line' id='LC1150'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">expectation</span><span class="p">.</span><span class="nx">matchHeaders</span><span class="p">(</span><span class="nx">headers</span><span class="p">))</span></div><div class='line' id='LC1151'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Expected &#39;</span> <span class="o">+</span> <span class="nx">expectation</span> <span class="o">+</span> <span class="s1">&#39; with different headers\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC1152'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="s1">&#39;EXPECTED: &#39;</span> <span class="o">+</span> <span class="nx">prettyPrint</span><span class="p">(</span><span class="nx">expectation</span><span class="p">.</span><span class="nx">headers</span><span class="p">)</span> <span class="o">+</span> <span class="s1">&#39;\nGOT:      &#39;</span> <span class="o">+</span></div><div class='line' id='LC1153'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">prettyPrint</span><span class="p">(</span><span class="nx">headers</span><span class="p">));</span></div><div class='line' id='LC1154'><br/></div><div class='line' id='LC1155'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expectations</span><span class="p">.</span><span class="nx">shift</span><span class="p">();</span></div><div class='line' id='LC1156'><br/></div><div class='line' id='LC1157'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">expectation</span><span class="p">.</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1158'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responses</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">wrapResponse</span><span class="p">(</span><span class="nx">expectation</span><span class="p">));</span></div><div class='line' id='LC1159'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1161'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">wasExpected</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1162'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1163'><br/></div><div class='line' id='LC1164'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="o">-</span><span class="mi">1</span><span class="p">,</span> <span class="nx">definition</span><span class="p">;</span></div><div class='line' id='LC1165'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">((</span><span class="nx">definition</span> <span class="o">=</span> <span class="nx">definitions</span><span class="p">[</span><span class="o">++</span><span class="nx">i</span><span class="p">]))</span> <span class="p">{</span></div><div class='line' id='LC1166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">definition</span><span class="p">.</span><span class="nx">match</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span> <span class="o">||</span> <span class="p">{}))</span> <span class="p">{</span></div><div class='line' id='LC1167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">definition</span><span class="p">.</span><span class="nx">response</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// if $browser specified, we do auto flush all requests</span></div><div class='line' id='LC1169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">$browser</span> <span class="o">?</span> <span class="nx">$browser</span><span class="p">.</span><span class="nx">defer</span> <span class="o">:</span> <span class="nx">responsesPush</span><span class="p">)(</span><span class="nx">wrapResponse</span><span class="p">(</span><span class="nx">definition</span><span class="p">));</span></div><div class='line' id='LC1170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">definition</span><span class="p">.</span><span class="nx">passThrough</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$delegate</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">callback</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">timeout</span><span class="p">,</span> <span class="nx">withCredentials</span><span class="p">);</span></div><div class='line' id='LC1172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;No response defined !&#39;</span><span class="p">);</span></div><div class='line' id='LC1173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span><span class="p">;</span></div><div class='line' id='LC1174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1175'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1176'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">wasExpected</span> <span class="o">?</span></div><div class='line' id='LC1177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;No response defined !&#39;</span><span class="p">)</span> <span class="o">:</span></div><div class='line' id='LC1178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unexpected request: &#39;</span> <span class="o">+</span> <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">url</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span></div><div class='line' id='LC1179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">(</span><span class="nx">expectation</span> <span class="o">?</span> <span class="s1">&#39;Expected &#39;</span> <span class="o">+</span> <span class="nx">expectation</span> <span class="o">:</span> <span class="s1">&#39;No more request expected&#39;</span><span class="p">));</span></div><div class='line' id='LC1180'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1181'><br/></div><div class='line' id='LC1182'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1183'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1184'><span class="cm">   * @name $httpBackend#when</span></div><div class='line' id='LC1185'><span class="cm">   * @description</span></div><div class='line' id='LC1186'><span class="cm">   * Creates a new backend definition.</span></div><div class='line' id='LC1187'><span class="cm">   *</span></div><div class='line' id='LC1188'><span class="cm">   * @param {string} method HTTP method.</span></div><div class='line' id='LC1189'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1190'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1191'><span class="cm">   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives</span></div><div class='line' id='LC1192'><span class="cm">   *   data string and returns true if the data is as expected.</span></div><div class='line' id='LC1193'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header</span></div><div class='line' id='LC1194'><span class="cm">   *   object and returns true if the headers match the current definition.</span></div><div class='line' id='LC1195'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that controls how a matched</span></div><div class='line' id='LC1196'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1197'><span class="cm">   *</span></div><div class='line' id='LC1198'><span class="cm">   *  - respond –</span></div><div class='line' id='LC1199'><span class="cm">   *      `{function([status,] data[, headers, statusText])</span></div><div class='line' id='LC1200'><span class="cm">   *      | function(function(method, url, data, headers)}`</span></div><div class='line' id='LC1201'><span class="cm">   *    – The respond method takes a set of static data to be returned or a function that can</span></div><div class='line' id='LC1202'><span class="cm">   *    return an array containing response status (number), response data (string), response</span></div><div class='line' id='LC1203'><span class="cm">   *    headers (Object), and the text for the status (string).</span></div><div class='line' id='LC1204'><span class="cm">   */</span></div><div class='line' id='LC1205'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">when</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1206'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">definition</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">MockHttpExpectation</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">),</span></div><div class='line' id='LC1207'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chain</span> <span class="o">=</span> <span class="p">{</span></div><div class='line' id='LC1208'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">respond</span><span class="o">:</span> <span class="kd">function</span><span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">statusText</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1209'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">definition</span><span class="p">.</span><span class="nx">response</span> <span class="o">=</span> <span class="nx">createResponse</span><span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">statusText</span><span class="p">);</span></div><div class='line' id='LC1210'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1211'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1212'><br/></div><div class='line' id='LC1213'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1214'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">chain</span><span class="p">.</span><span class="nx">passThrough</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1215'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">definition</span><span class="p">.</span><span class="nx">passThrough</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1216'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1217'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1218'><br/></div><div class='line' id='LC1219'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">definitions</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">definition</span><span class="p">);</span></div><div class='line' id='LC1220'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">chain</span><span class="p">;</span></div><div class='line' id='LC1221'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1222'><br/></div><div class='line' id='LC1223'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1224'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1225'><span class="cm">   * @name $httpBackend#whenGET</span></div><div class='line' id='LC1226'><span class="cm">   * @description</span></div><div class='line' id='LC1227'><span class="cm">   * Creates a new backend definition for GET requests. For more info see `when()`.</span></div><div class='line' id='LC1228'><span class="cm">   *</span></div><div class='line' id='LC1229'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1230'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1231'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1232'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1233'><span class="cm">   * request is handled.</span></div><div class='line' id='LC1234'><span class="cm">   */</span></div><div class='line' id='LC1235'><br/></div><div class='line' id='LC1236'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1237'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1238'><span class="cm">   * @name $httpBackend#whenHEAD</span></div><div class='line' id='LC1239'><span class="cm">   * @description</span></div><div class='line' id='LC1240'><span class="cm">   * Creates a new backend definition for HEAD requests. For more info see `when()`.</span></div><div class='line' id='LC1241'><span class="cm">   *</span></div><div class='line' id='LC1242'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1243'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1244'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1245'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1246'><span class="cm">   * request is handled.</span></div><div class='line' id='LC1247'><span class="cm">   */</span></div><div class='line' id='LC1248'><br/></div><div class='line' id='LC1249'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1250'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1251'><span class="cm">   * @name $httpBackend#whenDELETE</span></div><div class='line' id='LC1252'><span class="cm">   * @description</span></div><div class='line' id='LC1253'><span class="cm">   * Creates a new backend definition for DELETE requests. For more info see `when()`.</span></div><div class='line' id='LC1254'><span class="cm">   *</span></div><div class='line' id='LC1255'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1256'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1257'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1258'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1259'><span class="cm">   * request is handled.</span></div><div class='line' id='LC1260'><span class="cm">   */</span></div><div class='line' id='LC1261'><br/></div><div class='line' id='LC1262'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1263'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1264'><span class="cm">   * @name $httpBackend#whenPOST</span></div><div class='line' id='LC1265'><span class="cm">   * @description</span></div><div class='line' id='LC1266'><span class="cm">   * Creates a new backend definition for POST requests. For more info see `when()`.</span></div><div class='line' id='LC1267'><span class="cm">   *</span></div><div class='line' id='LC1268'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1269'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1270'><span class="cm">   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives</span></div><div class='line' id='LC1271'><span class="cm">   *   data string and returns true if the data is as expected.</span></div><div class='line' id='LC1272'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1273'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1274'><span class="cm">   * request is handled.</span></div><div class='line' id='LC1275'><span class="cm">   */</span></div><div class='line' id='LC1276'><br/></div><div class='line' id='LC1277'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1278'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1279'><span class="cm">   * @name $httpBackend#whenPUT</span></div><div class='line' id='LC1280'><span class="cm">   * @description</span></div><div class='line' id='LC1281'><span class="cm">   * Creates a new backend definition for PUT requests.  For more info see `when()`.</span></div><div class='line' id='LC1282'><span class="cm">   *</span></div><div class='line' id='LC1283'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1284'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1285'><span class="cm">   * @param {(string|RegExp|function(string))=} data HTTP request body or function that receives</span></div><div class='line' id='LC1286'><span class="cm">   *   data string and returns true if the data is as expected.</span></div><div class='line' id='LC1287'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1288'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1289'><span class="cm">   * request is handled.</span></div><div class='line' id='LC1290'><span class="cm">   */</span></div><div class='line' id='LC1291'><br/></div><div class='line' id='LC1292'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1293'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1294'><span class="cm">   * @name $httpBackend#whenJSONP</span></div><div class='line' id='LC1295'><span class="cm">   * @description</span></div><div class='line' id='LC1296'><span class="cm">   * Creates a new backend definition for JSONP requests. For more info see `when()`.</span></div><div class='line' id='LC1297'><span class="cm">   *</span></div><div class='line' id='LC1298'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1299'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1300'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1301'><span class="cm">   * request is handled.</span></div><div class='line' id='LC1302'><span class="cm">   */</span></div><div class='line' id='LC1303'>&nbsp;&nbsp;<span class="nx">createShortMethods</span><span class="p">(</span><span class="s1">&#39;when&#39;</span><span class="p">);</span></div><div class='line' id='LC1304'><br/></div><div class='line' id='LC1305'><br/></div><div class='line' id='LC1306'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1307'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1308'><span class="cm">   * @name $httpBackend#expect</span></div><div class='line' id='LC1309'><span class="cm">   * @description</span></div><div class='line' id='LC1310'><span class="cm">   * Creates a new request expectation.</span></div><div class='line' id='LC1311'><span class="cm">   *</span></div><div class='line' id='LC1312'><span class="cm">   * @param {string} method HTTP method.</span></div><div class='line' id='LC1313'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1314'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1315'><span class="cm">   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that</span></div><div class='line' id='LC1316'><span class="cm">   *  receives data string and returns true if the data is as expected, or Object if request body</span></div><div class='line' id='LC1317'><span class="cm">   *  is in JSON format.</span></div><div class='line' id='LC1318'><span class="cm">   * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header</span></div><div class='line' id='LC1319'><span class="cm">   *   object and returns true if the headers match the current expectation.</span></div><div class='line' id='LC1320'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1321'><span class="cm">   *  request is handled.</span></div><div class='line' id='LC1322'><span class="cm">   *</span></div><div class='line' id='LC1323'><span class="cm">   *  - respond –</span></div><div class='line' id='LC1324'><span class="cm">   *    `{function([status,] data[, headers, statusText])</span></div><div class='line' id='LC1325'><span class="cm">   *    | function(function(method, url, data, headers)}`</span></div><div class='line' id='LC1326'><span class="cm">   *    – The respond method takes a set of static data to be returned or a function that can</span></div><div class='line' id='LC1327'><span class="cm">   *    return an array containing response status (number), response data (string), response</span></div><div class='line' id='LC1328'><span class="cm">   *    headers (Object), and the text for the status (string).</span></div><div class='line' id='LC1329'><span class="cm">   */</span></div><div class='line' id='LC1330'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">expect</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1331'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">expectation</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">MockHttpExpectation</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC1332'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expectations</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">expectation</span><span class="p">);</span></div><div class='line' id='LC1333'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="p">{</span></div><div class='line' id='LC1334'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">respond</span><span class="o">:</span> <span class="kd">function</span> <span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">statusText</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1335'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expectation</span><span class="p">.</span><span class="nx">response</span> <span class="o">=</span> <span class="nx">createResponse</span><span class="p">(</span><span class="nx">status</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">,</span> <span class="nx">statusText</span><span class="p">);</span></div><div class='line' id='LC1336'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1337'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1338'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1339'><br/></div><div class='line' id='LC1340'><br/></div><div class='line' id='LC1341'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1342'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1343'><span class="cm">   * @name $httpBackend#expectGET</span></div><div class='line' id='LC1344'><span class="cm">   * @description</span></div><div class='line' id='LC1345'><span class="cm">   * Creates a new request expectation for GET requests. For more info see `expect()`.</span></div><div class='line' id='LC1346'><span class="cm">   *</span></div><div class='line' id='LC1347'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1348'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1349'><span class="cm">   * @param {Object=} headers HTTP headers.</span></div><div class='line' id='LC1350'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1351'><span class="cm">   * request is handled. See #expect for more info.</span></div><div class='line' id='LC1352'><span class="cm">   */</span></div><div class='line' id='LC1353'><br/></div><div class='line' id='LC1354'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1355'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1356'><span class="cm">   * @name $httpBackend#expectHEAD</span></div><div class='line' id='LC1357'><span class="cm">   * @description</span></div><div class='line' id='LC1358'><span class="cm">   * Creates a new request expectation for HEAD requests. For more info see `expect()`.</span></div><div class='line' id='LC1359'><span class="cm">   *</span></div><div class='line' id='LC1360'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1361'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1362'><span class="cm">   * @param {Object=} headers HTTP headers.</span></div><div class='line' id='LC1363'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1364'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1365'><span class="cm">   */</span></div><div class='line' id='LC1366'><br/></div><div class='line' id='LC1367'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1368'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1369'><span class="cm">   * @name $httpBackend#expectDELETE</span></div><div class='line' id='LC1370'><span class="cm">   * @description</span></div><div class='line' id='LC1371'><span class="cm">   * Creates a new request expectation for DELETE requests. For more info see `expect()`.</span></div><div class='line' id='LC1372'><span class="cm">   *</span></div><div class='line' id='LC1373'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1374'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1375'><span class="cm">   * @param {Object=} headers HTTP headers.</span></div><div class='line' id='LC1376'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1377'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1378'><span class="cm">   */</span></div><div class='line' id='LC1379'><br/></div><div class='line' id='LC1380'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1381'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1382'><span class="cm">   * @name $httpBackend#expectPOST</span></div><div class='line' id='LC1383'><span class="cm">   * @description</span></div><div class='line' id='LC1384'><span class="cm">   * Creates a new request expectation for POST requests. For more info see `expect()`.</span></div><div class='line' id='LC1385'><span class="cm">   *</span></div><div class='line' id='LC1386'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1387'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1388'><span class="cm">   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that</span></div><div class='line' id='LC1389'><span class="cm">   *  receives data string and returns true if the data is as expected, or Object if request body</span></div><div class='line' id='LC1390'><span class="cm">   *  is in JSON format.</span></div><div class='line' id='LC1391'><span class="cm">   * @param {Object=} headers HTTP headers.</span></div><div class='line' id='LC1392'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1393'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1394'><span class="cm">   */</span></div><div class='line' id='LC1395'><br/></div><div class='line' id='LC1396'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1397'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1398'><span class="cm">   * @name $httpBackend#expectPUT</span></div><div class='line' id='LC1399'><span class="cm">   * @description</span></div><div class='line' id='LC1400'><span class="cm">   * Creates a new request expectation for PUT requests. For more info see `expect()`.</span></div><div class='line' id='LC1401'><span class="cm">   *</span></div><div class='line' id='LC1402'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1403'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1404'><span class="cm">   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that</span></div><div class='line' id='LC1405'><span class="cm">   *  receives data string and returns true if the data is as expected, or Object if request body</span></div><div class='line' id='LC1406'><span class="cm">   *  is in JSON format.</span></div><div class='line' id='LC1407'><span class="cm">   * @param {Object=} headers HTTP headers.</span></div><div class='line' id='LC1408'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1409'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1410'><span class="cm">   */</span></div><div class='line' id='LC1411'><br/></div><div class='line' id='LC1412'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1413'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1414'><span class="cm">   * @name $httpBackend#expectPATCH</span></div><div class='line' id='LC1415'><span class="cm">   * @description</span></div><div class='line' id='LC1416'><span class="cm">   * Creates a new request expectation for PATCH requests. For more info see `expect()`.</span></div><div class='line' id='LC1417'><span class="cm">   *</span></div><div class='line' id='LC1418'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1419'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1420'><span class="cm">   * @param {(string|RegExp|function(string)|Object)=} data HTTP request body or function that</span></div><div class='line' id='LC1421'><span class="cm">   *  receives data string and returns true if the data is as expected, or Object if request body</span></div><div class='line' id='LC1422'><span class="cm">   *  is in JSON format.</span></div><div class='line' id='LC1423'><span class="cm">   * @param {Object=} headers HTTP headers.</span></div><div class='line' id='LC1424'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1425'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1426'><span class="cm">   */</span></div><div class='line' id='LC1427'><br/></div><div class='line' id='LC1428'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1429'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1430'><span class="cm">   * @name $httpBackend#expectJSONP</span></div><div class='line' id='LC1431'><span class="cm">   * @description</span></div><div class='line' id='LC1432'><span class="cm">   * Creates a new request expectation for JSONP requests. For more info see `expect()`.</span></div><div class='line' id='LC1433'><span class="cm">   *</span></div><div class='line' id='LC1434'><span class="cm">   * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1435'><span class="cm">   *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1436'><span class="cm">   * @returns {requestHandler} Returns an object with `respond` method that control how a matched</span></div><div class='line' id='LC1437'><span class="cm">   *   request is handled.</span></div><div class='line' id='LC1438'><span class="cm">   */</span></div><div class='line' id='LC1439'>&nbsp;&nbsp;<span class="nx">createShortMethods</span><span class="p">(</span><span class="s1">&#39;expect&#39;</span><span class="p">);</span></div><div class='line' id='LC1440'><br/></div><div class='line' id='LC1441'><br/></div><div class='line' id='LC1442'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1443'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1444'><span class="cm">   * @name $httpBackend#flush</span></div><div class='line' id='LC1445'><span class="cm">   * @description</span></div><div class='line' id='LC1446'><span class="cm">   * Flushes all pending requests using the trained responses.</span></div><div class='line' id='LC1447'><span class="cm">   *</span></div><div class='line' id='LC1448'><span class="cm">   * @param {number=} count Number of responses to flush (in the order they arrived). If undefined,</span></div><div class='line' id='LC1449'><span class="cm">   *   all pending requests will be flushed. If there are no pending requests when the flush method</span></div><div class='line' id='LC1450'><span class="cm">   *   is called an exception is thrown (as this typically a sign of programming error).</span></div><div class='line' id='LC1451'><span class="cm">   */</span></div><div class='line' id='LC1452'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">count</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1453'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$rootScope</span><span class="p">.</span><span class="nx">$digest</span><span class="p">();</span></div><div class='line' id='LC1454'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">responses</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;No pending request to flush !&#39;</span><span class="p">);</span></div><div class='line' id='LC1455'><br/></div><div class='line' id='LC1456'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">count</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1457'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">count</span><span class="o">--</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1458'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">responses</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;No more pending request to flush !&#39;</span><span class="p">);</span></div><div class='line' id='LC1459'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responses</span><span class="p">.</span><span class="nx">shift</span><span class="p">()();</span></div><div class='line' id='LC1460'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1461'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC1462'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">while</span> <span class="p">(</span><span class="nx">responses</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1463'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responses</span><span class="p">.</span><span class="nx">shift</span><span class="p">()();</span></div><div class='line' id='LC1464'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1465'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1466'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">verifyNoOutstandingExpectation</span><span class="p">();</span></div><div class='line' id='LC1467'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1468'><br/></div><div class='line' id='LC1469'><br/></div><div class='line' id='LC1470'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1471'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1472'><span class="cm">   * @name $httpBackend#verifyNoOutstandingExpectation</span></div><div class='line' id='LC1473'><span class="cm">   * @description</span></div><div class='line' id='LC1474'><span class="cm">   * Verifies that all of the requests defined via the `expect` api were made. If any of the</span></div><div class='line' id='LC1475'><span class="cm">   * requests were not made, verifyNoOutstandingExpectation throws an exception.</span></div><div class='line' id='LC1476'><span class="cm">   *</span></div><div class='line' id='LC1477'><span class="cm">   * Typically, you would call this method following each test case that asserts requests using an</span></div><div class='line' id='LC1478'><span class="cm">   * &quot;afterEach&quot; clause.</span></div><div class='line' id='LC1479'><span class="cm">   *</span></div><div class='line' id='LC1480'><span class="cm">   * ```js</span></div><div class='line' id='LC1481'><span class="cm">   *   afterEach($httpBackend.verifyNoOutstandingExpectation);</span></div><div class='line' id='LC1482'><span class="cm">   * ```</span></div><div class='line' id='LC1483'><span class="cm">   */</span></div><div class='line' id='LC1484'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">verifyNoOutstandingExpectation</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1485'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$rootScope</span><span class="p">.</span><span class="nx">$digest</span><span class="p">();</span></div><div class='line' id='LC1486'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">expectations</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1487'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unsatisfied requests: &#39;</span> <span class="o">+</span> <span class="nx">expectations</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">));</span></div><div class='line' id='LC1488'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1489'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1490'><br/></div><div class='line' id='LC1491'><br/></div><div class='line' id='LC1492'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1493'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1494'><span class="cm">   * @name $httpBackend#verifyNoOutstandingRequest</span></div><div class='line' id='LC1495'><span class="cm">   * @description</span></div><div class='line' id='LC1496'><span class="cm">   * Verifies that there are no outstanding requests that need to be flushed.</span></div><div class='line' id='LC1497'><span class="cm">   *</span></div><div class='line' id='LC1498'><span class="cm">   * Typically, you would call this method following each test case that asserts requests using an</span></div><div class='line' id='LC1499'><span class="cm">   * &quot;afterEach&quot; clause.</span></div><div class='line' id='LC1500'><span class="cm">   *</span></div><div class='line' id='LC1501'><span class="cm">   * ```js</span></div><div class='line' id='LC1502'><span class="cm">   *   afterEach($httpBackend.verifyNoOutstandingRequest);</span></div><div class='line' id='LC1503'><span class="cm">   * ```</span></div><div class='line' id='LC1504'><span class="cm">   */</span></div><div class='line' id='LC1505'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">verifyNoOutstandingRequest</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1506'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">responses</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1507'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Unflushed requests: &#39;</span> <span class="o">+</span> <span class="nx">responses</span><span class="p">.</span><span class="nx">length</span><span class="p">);</span></div><div class='line' id='LC1508'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1509'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1510'><br/></div><div class='line' id='LC1511'><br/></div><div class='line' id='LC1512'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1513'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1514'><span class="cm">   * @name $httpBackend#resetExpectations</span></div><div class='line' id='LC1515'><span class="cm">   * @description</span></div><div class='line' id='LC1516'><span class="cm">   * Resets all request expectations, but preserves all backend definitions. Typically, you would</span></div><div class='line' id='LC1517'><span class="cm">   * call resetExpectations during a multiple-phase test when you want to reuse the same instance of</span></div><div class='line' id='LC1518'><span class="cm">   * $httpBackend mock.</span></div><div class='line' id='LC1519'><span class="cm">   */</span></div><div class='line' id='LC1520'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">.</span><span class="nx">resetExpectations</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1521'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">expectations</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1522'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">responses</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1523'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1524'><br/></div><div class='line' id='LC1525'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$httpBackend</span><span class="p">;</span></div><div class='line' id='LC1526'><br/></div><div class='line' id='LC1527'><br/></div><div class='line' id='LC1528'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">createShortMethods</span><span class="p">(</span><span class="nx">prefix</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1529'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">([</span><span class="s1">&#39;GET&#39;</span><span class="p">,</span> <span class="s1">&#39;DELETE&#39;</span><span class="p">,</span> <span class="s1">&#39;JSONP&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1530'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">[</span><span class="nx">prefix</span> <span class="o">+</span> <span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1531'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$httpBackend</span><span class="p">[</span><span class="nx">prefix</span><span class="p">](</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="kc">undefined</span><span class="p">,</span> <span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC1532'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1533'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1534'><br/></div><div class='line' id='LC1535'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">([</span><span class="s1">&#39;PUT&#39;</span><span class="p">,</span> <span class="s1">&#39;POST&#39;</span><span class="p">,</span> <span class="s1">&#39;PATCH&#39;</span><span class="p">],</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1536'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="p">[</span><span class="nx">prefix</span> <span class="o">+</span> <span class="nx">method</span><span class="p">]</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1537'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$httpBackend</span><span class="p">[</span><span class="nx">prefix</span><span class="p">](</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">);</span></div><div class='line' id='LC1538'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1539'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1540'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1541'><span class="p">}</span></div><div class='line' id='LC1542'><br/></div><div class='line' id='LC1543'><span class="kd">function</span> <span class="nx">MockHttpExpectation</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">data</span><span class="p">,</span> <span class="nx">headers</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1544'><br/></div><div class='line' id='LC1545'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC1546'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">headers</span> <span class="o">=</span> <span class="nx">headers</span><span class="p">;</span></div><div class='line' id='LC1547'><br/></div><div class='line' id='LC1548'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">match</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">m</span><span class="p">,</span> <span class="nx">u</span><span class="p">,</span> <span class="nx">d</span><span class="p">,</span> <span class="nx">h</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1549'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">method</span> <span class="o">!=</span> <span class="nx">m</span><span class="p">)</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1550'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">matchUrl</span><span class="p">(</span><span class="nx">u</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1551'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">matchData</span><span class="p">(</span><span class="nx">d</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1552'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isDefined</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">matchHeaders</span><span class="p">(</span><span class="nx">h</span><span class="p">))</span> <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></div><div class='line' id='LC1553'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1554'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1555'><br/></div><div class='line' id='LC1556'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">matchUrl</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">u</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1557'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">url</span><span class="p">)</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1558'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">url</span><span class="p">.</span><span class="nx">test</span><span class="p">))</span> <span class="k">return</span> <span class="nx">url</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">u</span><span class="p">);</span></div><div class='line' id='LC1559'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">url</span><span class="p">))</span> <span class="k">return</span> <span class="nx">url</span><span class="p">(</span><span class="nx">u</span><span class="p">);</span></div><div class='line' id='LC1560'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">url</span> <span class="o">==</span> <span class="nx">u</span><span class="p">;</span></div><div class='line' id='LC1561'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1562'><br/></div><div class='line' id='LC1563'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">matchHeaders</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">h</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1564'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">headers</span><span class="p">))</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1565'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">headers</span><span class="p">))</span> <span class="k">return</span> <span class="nx">headers</span><span class="p">(</span><span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC1566'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">headers</span><span class="p">,</span> <span class="nx">h</span><span class="p">);</span></div><div class='line' id='LC1567'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1568'><br/></div><div class='line' id='LC1569'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">matchData</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">d</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1570'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isUndefined</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="k">return</span> <span class="kc">true</span><span class="p">;</span></div><div class='line' id='LC1571'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">data</span><span class="p">.</span><span class="nx">test</span><span class="p">))</span> <span class="k">return</span> <span class="nx">data</span><span class="p">.</span><span class="nx">test</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span></div><div class='line' id='LC1572'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">isFunction</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="k">return</span> <span class="nx">data</span><span class="p">(</span><span class="nx">d</span><span class="p">);</span></div><div class='line' id='LC1573'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">data</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isString</span><span class="p">(</span><span class="nx">data</span><span class="p">))</span> <span class="k">return</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">equals</span><span class="p">(</span><span class="nx">data</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">fromJson</span><span class="p">(</span><span class="nx">d</span><span class="p">));</span></div><div class='line' id='LC1574'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">data</span> <span class="o">==</span> <span class="nx">d</span><span class="p">;</span></div><div class='line' id='LC1575'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1576'><br/></div><div class='line' id='LC1577'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1578'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">method</span> <span class="o">+</span> <span class="s1">&#39; &#39;</span> <span class="o">+</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC1579'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1580'><span class="p">}</span></div><div class='line' id='LC1581'><br/></div><div class='line' id='LC1582'><span class="kd">function</span> <span class="nx">createMockXhr</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1583'>&nbsp;&nbsp;<span class="k">return</span> <span class="k">new</span> <span class="nx">MockXhr</span><span class="p">();</span></div><div class='line' id='LC1584'><span class="p">}</span></div><div class='line' id='LC1585'><br/></div><div class='line' id='LC1586'><span class="kd">function</span> <span class="nx">MockXhr</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1587'><br/></div><div class='line' id='LC1588'>&nbsp;&nbsp;<span class="c1">// hack for testing $http, $httpBackend</span></div><div class='line' id='LC1589'>&nbsp;&nbsp;<span class="nx">MockXhr</span><span class="p">.</span><span class="nx">$$lastInstance</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1590'><br/></div><div class='line' id='LC1591'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">open</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">method</span><span class="p">,</span> <span class="nx">url</span><span class="p">,</span> <span class="nx">async</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1592'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$method</span> <span class="o">=</span> <span class="nx">method</span><span class="p">;</span></div><div class='line' id='LC1593'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$url</span> <span class="o">=</span> <span class="nx">url</span><span class="p">;</span></div><div class='line' id='LC1594'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$async</span> <span class="o">=</span> <span class="nx">async</span><span class="p">;</span></div><div class='line' id='LC1595'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$reqHeaders</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1596'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$respHeaders</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1597'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1598'><br/></div><div class='line' id='LC1599'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">send</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">data</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1600'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$data</span> <span class="o">=</span> <span class="nx">data</span><span class="p">;</span></div><div class='line' id='LC1601'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1602'><br/></div><div class='line' id='LC1603'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">setRequestHeader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1604'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$$reqHeaders</span><span class="p">[</span><span class="nx">key</span><span class="p">]</span> <span class="o">=</span> <span class="nx">value</span><span class="p">;</span></div><div class='line' id='LC1605'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1606'><br/></div><div class='line' id='LC1607'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getResponseHeader</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">name</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1608'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// the lookup must be case insensitive,</span></div><div class='line' id='LC1609'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// that&#39;s why we try two quick lookups first and full scan last</span></div><div class='line' id='LC1610'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">header</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$$respHeaders</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1611'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">header</span><span class="p">)</span> <span class="k">return</span> <span class="nx">header</span><span class="p">;</span></div><div class='line' id='LC1612'><br/></div><div class='line' id='LC1613'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">name</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">lowercase</span><span class="p">(</span><span class="nx">name</span><span class="p">);</span></div><div class='line' id='LC1614'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">header</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">$$respHeaders</span><span class="p">[</span><span class="nx">name</span><span class="p">];</span></div><div class='line' id='LC1615'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">header</span><span class="p">)</span> <span class="k">return</span> <span class="nx">header</span><span class="p">;</span></div><div class='line' id='LC1616'><br/></div><div class='line' id='LC1617'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">header</span> <span class="o">=</span> <span class="kc">undefined</span><span class="p">;</span></div><div class='line' id='LC1618'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$$respHeaders</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">headerVal</span><span class="p">,</span> <span class="nx">headerName</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1619'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">header</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">lowercase</span><span class="p">(</span><span class="nx">headerName</span><span class="p">)</span> <span class="o">==</span> <span class="nx">name</span><span class="p">)</span> <span class="nx">header</span> <span class="o">=</span> <span class="nx">headerVal</span><span class="p">;</span></div><div class='line' id='LC1620'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1621'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">header</span><span class="p">;</span></div><div class='line' id='LC1622'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1623'><br/></div><div class='line' id='LC1624'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">getAllResponseHeaders</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1625'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">lines</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1626'><br/></div><div class='line' id='LC1627'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">$$respHeaders</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1628'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">lines</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">key</span> <span class="o">+</span> <span class="s1">&#39;: &#39;</span> <span class="o">+</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC1629'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1630'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">lines</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;\n&#39;</span><span class="p">);</span></div><div class='line' id='LC1631'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1632'><br/></div><div class='line' id='LC1633'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">abort</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">;</span></div><div class='line' id='LC1634'><span class="p">}</span></div><div class='line' id='LC1635'><br/></div><div class='line' id='LC1636'><br/></div><div class='line' id='LC1637'><span class="cm">/**</span></div><div class='line' id='LC1638'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC1639'><span class="cm"> * @name $timeout</span></div><div class='line' id='LC1640'><span class="cm"> * @description</span></div><div class='line' id='LC1641'><span class="cm"> *</span></div><div class='line' id='LC1642'><span class="cm"> * This service is just a simple decorator for {@link ng.$timeout $timeout} service</span></div><div class='line' id='LC1643'><span class="cm"> * that adds a &quot;flush&quot; and &quot;verifyNoPendingTasks&quot; methods.</span></div><div class='line' id='LC1644'><span class="cm"> */</span></div><div class='line' id='LC1645'><br/></div><div class='line' id='LC1646'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$TimeoutDecorator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$delegate</span><span class="p">,</span> <span class="nx">$browser</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1647'><br/></div><div class='line' id='LC1648'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1649'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1650'><span class="cm">   * @name $timeout#flush</span></div><div class='line' id='LC1651'><span class="cm">   * @description</span></div><div class='line' id='LC1652'><span class="cm">   *</span></div><div class='line' id='LC1653'><span class="cm">   * Flushes the queue of pending tasks.</span></div><div class='line' id='LC1654'><span class="cm">   *</span></div><div class='line' id='LC1655'><span class="cm">   * @param {number=} delay maximum timeout amount to flush up until</span></div><div class='line' id='LC1656'><span class="cm">   */</span></div><div class='line' id='LC1657'>&nbsp;&nbsp;<span class="nx">$delegate</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">delay</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1658'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$browser</span><span class="p">.</span><span class="nx">defer</span><span class="p">.</span><span class="nx">flush</span><span class="p">(</span><span class="nx">delay</span><span class="p">);</span></div><div class='line' id='LC1659'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1660'><br/></div><div class='line' id='LC1661'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC1662'><span class="cm">   * @ngdoc method</span></div><div class='line' id='LC1663'><span class="cm">   * @name $timeout#verifyNoPendingTasks</span></div><div class='line' id='LC1664'><span class="cm">   * @description</span></div><div class='line' id='LC1665'><span class="cm">   *</span></div><div class='line' id='LC1666'><span class="cm">   * Verifies that there are no pending tasks that need to be flushed.</span></div><div class='line' id='LC1667'><span class="cm">   */</span></div><div class='line' id='LC1668'>&nbsp;&nbsp;<span class="nx">$delegate</span><span class="p">.</span><span class="nx">verifyNoPendingTasks</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1669'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">$browser</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">length</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1670'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Deferred tasks to flush (&#39;</span> <span class="o">+</span> <span class="nx">$browser</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">.</span><span class="nx">length</span> <span class="o">+</span> <span class="s1">&#39;): &#39;</span> <span class="o">+</span></div><div class='line' id='LC1671'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">formatPendingTasksAsString</span><span class="p">(</span><span class="nx">$browser</span><span class="p">.</span><span class="nx">deferredFns</span><span class="p">));</span></div><div class='line' id='LC1672'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1673'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1674'><br/></div><div class='line' id='LC1675'>&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">formatPendingTasksAsString</span><span class="p">(</span><span class="nx">tasks</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1676'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">result</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1677'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">tasks</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">task</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1678'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">result</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="s1">&#39;{id: &#39;</span> <span class="o">+</span> <span class="nx">task</span><span class="p">.</span><span class="nx">id</span> <span class="o">+</span> <span class="s1">&#39;, &#39;</span> <span class="o">+</span> <span class="s1">&#39;time: &#39;</span> <span class="o">+</span> <span class="nx">task</span><span class="p">.</span><span class="nx">time</span> <span class="o">+</span> <span class="s1">&#39;}&#39;</span><span class="p">);</span></div><div class='line' id='LC1679'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1680'><br/></div><div class='line' id='LC1681'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">result</span><span class="p">.</span><span class="nx">join</span><span class="p">(</span><span class="s1">&#39;, &#39;</span><span class="p">);</span></div><div class='line' id='LC1682'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1683'><br/></div><div class='line' id='LC1684'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">$delegate</span><span class="p">;</span></div><div class='line' id='LC1685'><span class="p">};</span></div><div class='line' id='LC1686'><br/></div><div class='line' id='LC1687'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$RAFDecorator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$delegate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1688'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">queue</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1689'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">rafFn</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1690'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">index</span> <span class="o">=</span> <span class="nx">queue</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1691'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queue</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC1692'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1693'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queue</span><span class="p">.</span><span class="nx">splice</span><span class="p">(</span><span class="nx">index</span><span class="p">,</span> <span class="mi">1</span><span class="p">);</span></div><div class='line' id='LC1694'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1695'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1696'><br/></div><div class='line' id='LC1697'>&nbsp;&nbsp;<span class="nx">rafFn</span><span class="p">.</span><span class="nx">supported</span> <span class="o">=</span> <span class="nx">$delegate</span><span class="p">.</span><span class="nx">supported</span><span class="p">;</span></div><div class='line' id='LC1698'><br/></div><div class='line' id='LC1699'>&nbsp;&nbsp;<span class="nx">rafFn</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1700'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span><span class="p">(</span><span class="nx">queue</span><span class="p">.</span><span class="nx">length</span> <span class="o">===</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1701'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;No rAF callbacks present&#39;</span><span class="p">);</span></div><div class='line' id='LC1702'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1703'><br/></div><div class='line' id='LC1704'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">length</span> <span class="o">=</span> <span class="nx">queue</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span></div><div class='line' id='LC1705'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span><span class="o">=</span><span class="mi">0</span><span class="p">;</span><span class="nx">i</span><span class="o">&lt;</span><span class="nx">length</span><span class="p">;</span><span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1706'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queue</span><span class="p">[</span><span class="nx">i</span><span class="p">]();</span></div><div class='line' id='LC1707'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1708'><br/></div><div class='line' id='LC1709'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">queue</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1710'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1711'><br/></div><div class='line' id='LC1712'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">rafFn</span><span class="p">;</span></div><div class='line' id='LC1713'><span class="p">};</span></div><div class='line' id='LC1714'><br/></div><div class='line' id='LC1715'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$AsyncCallbackDecorator</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$delegate</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1716'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">callbacks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1717'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">addFn</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1718'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callbacks</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">fn</span><span class="p">);</span></div><div class='line' id='LC1719'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1720'>&nbsp;&nbsp;<span class="nx">addFn</span><span class="p">.</span><span class="nx">flush</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1721'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">callbacks</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">fn</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1722'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">fn</span><span class="p">();</span></div><div class='line' id='LC1723'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1724'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">callbacks</span> <span class="o">=</span> <span class="p">[];</span></div><div class='line' id='LC1725'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1726'>&nbsp;&nbsp;<span class="k">return</span> <span class="nx">addFn</span><span class="p">;</span></div><div class='line' id='LC1727'><span class="p">};</span></div><div class='line' id='LC1728'><br/></div><div class='line' id='LC1729'><span class="cm">/**</span></div><div class='line' id='LC1730'><span class="cm"> *</span></div><div class='line' id='LC1731'><span class="cm"> */</span></div><div class='line' id='LC1732'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$RootElementProvider</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1733'>&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">$get</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1734'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="s1">&#39;&lt;div ng-app&gt;&lt;/div&gt;&#39;</span><span class="p">);</span></div><div class='line' id='LC1735'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1736'><span class="p">};</span></div><div class='line' id='LC1737'><br/></div><div class='line' id='LC1738'><span class="cm">/**</span></div><div class='line' id='LC1739'><span class="cm"> * @ngdoc module</span></div><div class='line' id='LC1740'><span class="cm"> * @name ngMock</span></div><div class='line' id='LC1741'><span class="cm"> * @description</span></div><div class='line' id='LC1742'><span class="cm"> *</span></div><div class='line' id='LC1743'><span class="cm"> * # ngMock</span></div><div class='line' id='LC1744'><span class="cm"> *</span></div><div class='line' id='LC1745'><span class="cm"> * The `ngMock` module providers support to inject and mock Angular services into unit tests.</span></div><div class='line' id='LC1746'><span class="cm"> * In addition, ngMock also extends various core ng services such that they can be</span></div><div class='line' id='LC1747'><span class="cm"> * inspected and controlled in a synchronous manner within test code.</span></div><div class='line' id='LC1748'><span class="cm"> *</span></div><div class='line' id='LC1749'><span class="cm"> *</span></div><div class='line' id='LC1750'><span class="cm"> * &lt;div doc-module-components=&quot;ngMock&quot;&gt;&lt;/div&gt;</span></div><div class='line' id='LC1751'><span class="cm"> *</span></div><div class='line' id='LC1752'><span class="cm"> */</span></div><div class='line' id='LC1753'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngMock&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span><span class="nx">provider</span><span class="p">({</span></div><div class='line' id='LC1754'>&nbsp;&nbsp;<span class="nx">$browser</span><span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$BrowserProvider</span><span class="p">,</span></div><div class='line' id='LC1755'>&nbsp;&nbsp;<span class="nx">$exceptionHandler</span><span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$ExceptionHandlerProvider</span><span class="p">,</span></div><div class='line' id='LC1756'>&nbsp;&nbsp;<span class="nx">$log</span><span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$LogProvider</span><span class="p">,</span></div><div class='line' id='LC1757'>&nbsp;&nbsp;<span class="nx">$interval</span><span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$IntervalProvider</span><span class="p">,</span></div><div class='line' id='LC1758'>&nbsp;&nbsp;<span class="nx">$httpBackend</span><span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$HttpBackendProvider</span><span class="p">,</span></div><div class='line' id='LC1759'>&nbsp;&nbsp;<span class="nx">$rootElement</span><span class="o">:</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$RootElementProvider</span></div><div class='line' id='LC1760'><span class="p">}).</span><span class="nx">config</span><span class="p">([</span><span class="s1">&#39;$provide&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$provide</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1761'>&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">decorator</span><span class="p">(</span><span class="s1">&#39;$timeout&#39;</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$TimeoutDecorator</span><span class="p">);</span></div><div class='line' id='LC1762'>&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">decorator</span><span class="p">(</span><span class="s1">&#39;$$rAF&#39;</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$RAFDecorator</span><span class="p">);</span></div><div class='line' id='LC1763'>&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">decorator</span><span class="p">(</span><span class="s1">&#39;$$asyncCallback&#39;</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">$AsyncCallbackDecorator</span><span class="p">);</span></div><div class='line' id='LC1764'><span class="p">}]);</span></div><div class='line' id='LC1765'><br/></div><div class='line' id='LC1766'><span class="cm">/**</span></div><div class='line' id='LC1767'><span class="cm"> * @ngdoc module</span></div><div class='line' id='LC1768'><span class="cm"> * @name ngMockE2E</span></div><div class='line' id='LC1769'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1770'><span class="cm"> * @description</span></div><div class='line' id='LC1771'><span class="cm"> *</span></div><div class='line' id='LC1772'><span class="cm"> * The `ngMockE2E` is an angular module which contains mocks suitable for end-to-end testing.</span></div><div class='line' id='LC1773'><span class="cm"> * Currently there is only one mock present in this module -</span></div><div class='line' id='LC1774'><span class="cm"> * the {@link ngMockE2E.$httpBackend e2e $httpBackend} mock.</span></div><div class='line' id='LC1775'><span class="cm"> */</span></div><div class='line' id='LC1776'><span class="nx">angular</span><span class="p">.</span><span class="nx">module</span><span class="p">(</span><span class="s1">&#39;ngMockE2E&#39;</span><span class="p">,</span> <span class="p">[</span><span class="s1">&#39;ng&#39;</span><span class="p">]).</span><span class="nx">config</span><span class="p">([</span><span class="s1">&#39;$provide&#39;</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">$provide</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1777'>&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">decorator</span><span class="p">(</span><span class="s1">&#39;$httpBackend&#39;</span><span class="p">,</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">e2e</span><span class="p">.</span><span class="nx">$httpBackendDecorator</span><span class="p">);</span></div><div class='line' id='LC1778'><span class="p">}]);</span></div><div class='line' id='LC1779'><br/></div><div class='line' id='LC1780'><span class="cm">/**</span></div><div class='line' id='LC1781'><span class="cm"> * @ngdoc service</span></div><div class='line' id='LC1782'><span class="cm"> * @name $httpBackend</span></div><div class='line' id='LC1783'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1784'><span class="cm"> * @description</span></div><div class='line' id='LC1785'><span class="cm"> * Fake HTTP backend implementation suitable for end-to-end testing or backend-less development of</span></div><div class='line' id='LC1786'><span class="cm"> * applications that use the {@link ng.$http $http service}.</span></div><div class='line' id='LC1787'><span class="cm"> *</span></div><div class='line' id='LC1788'><span class="cm"> * *Note*: For fake http backend implementation suitable for unit testing please see</span></div><div class='line' id='LC1789'><span class="cm"> * {@link ngMock.$httpBackend unit-testing $httpBackend mock}.</span></div><div class='line' id='LC1790'><span class="cm"> *</span></div><div class='line' id='LC1791'><span class="cm"> * This implementation can be used to respond with static or dynamic responses via the `when` api</span></div><div class='line' id='LC1792'><span class="cm"> * and its shortcuts (`whenGET`, `whenPOST`, etc) and optionally pass through requests to the</span></div><div class='line' id='LC1793'><span class="cm"> * real $httpBackend for specific requests (e.g. to interact with certain remote apis or to fetch</span></div><div class='line' id='LC1794'><span class="cm"> * templates from a webserver).</span></div><div class='line' id='LC1795'><span class="cm"> *</span></div><div class='line' id='LC1796'><span class="cm"> * As opposed to unit-testing, in an end-to-end testing scenario or in scenario when an application</span></div><div class='line' id='LC1797'><span class="cm"> * is being developed with the real backend api replaced with a mock, it is often desirable for</span></div><div class='line' id='LC1798'><span class="cm"> * certain category of requests to bypass the mock and issue a real http request (e.g. to fetch</span></div><div class='line' id='LC1799'><span class="cm"> * templates or static files from the webserver). To configure the backend with this behavior</span></div><div class='line' id='LC1800'><span class="cm"> * use the `passThrough` request handler of `when` instead of `respond`.</span></div><div class='line' id='LC1801'><span class="cm"> *</span></div><div class='line' id='LC1802'><span class="cm"> * Additionally, we don&#39;t want to manually have to flush mocked out requests like we do during unit</span></div><div class='line' id='LC1803'><span class="cm"> * testing. For this reason the e2e $httpBackend automatically flushes mocked out requests</span></div><div class='line' id='LC1804'><span class="cm"> * automatically, closely simulating the behavior of the XMLHttpRequest object.</span></div><div class='line' id='LC1805'><span class="cm"> *</span></div><div class='line' id='LC1806'><span class="cm"> * To setup the application to run with this http backend, you have to create a module that depends</span></div><div class='line' id='LC1807'><span class="cm"> * on the `ngMockE2E` and your application modules and defines the fake backend:</span></div><div class='line' id='LC1808'><span class="cm"> *</span></div><div class='line' id='LC1809'><span class="cm"> * ```js</span></div><div class='line' id='LC1810'><span class="cm"> *   myAppDev = angular.module(&#39;myAppDev&#39;, [&#39;myApp&#39;, &#39;ngMockE2E&#39;]);</span></div><div class='line' id='LC1811'><span class="cm"> *   myAppDev.run(function($httpBackend) {</span></div><div class='line' id='LC1812'><span class="cm"> *     phones = [{name: &#39;phone1&#39;}, {name: &#39;phone2&#39;}];</span></div><div class='line' id='LC1813'><span class="cm"> *</span></div><div class='line' id='LC1814'><span class="cm"> *     // returns the current list of phones</span></div><div class='line' id='LC1815'><span class="cm"> *     $httpBackend.whenGET(&#39;/phones&#39;).respond(phones);</span></div><div class='line' id='LC1816'><span class="cm"> *</span></div><div class='line' id='LC1817'><span class="cm"> *     // adds a new phone to the phones array</span></div><div class='line' id='LC1818'><span class="cm"> *     $httpBackend.whenPOST(&#39;/phones&#39;).respond(function(method, url, data) {</span></div><div class='line' id='LC1819'><span class="cm"> *       phones.push(angular.fromJson(data));</span></div><div class='line' id='LC1820'><span class="cm"> *     });</span></div><div class='line' id='LC1821'><span class="cm"> *     $httpBackend.whenGET(/^\/templates\//).passThrough();</span></div><div class='line' id='LC1822'><span class="cm"> *     //...</span></div><div class='line' id='LC1823'><span class="cm"> *   });</span></div><div class='line' id='LC1824'><span class="cm"> * ```</span></div><div class='line' id='LC1825'><span class="cm"> *</span></div><div class='line' id='LC1826'><span class="cm"> * Afterwards, bootstrap your app with this new module.</span></div><div class='line' id='LC1827'><span class="cm"> */</span></div><div class='line' id='LC1828'><br/></div><div class='line' id='LC1829'><span class="cm">/**</span></div><div class='line' id='LC1830'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1831'><span class="cm"> * @name $httpBackend#when</span></div><div class='line' id='LC1832'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1833'><span class="cm"> * @description</span></div><div class='line' id='LC1834'><span class="cm"> * Creates a new backend definition.</span></div><div class='line' id='LC1835'><span class="cm"> *</span></div><div class='line' id='LC1836'><span class="cm"> * @param {string} method HTTP method.</span></div><div class='line' id='LC1837'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1838'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1839'><span class="cm"> * @param {(string|RegExp)=} data HTTP request body.</span></div><div class='line' id='LC1840'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers or function that receives http header</span></div><div class='line' id='LC1841'><span class="cm"> *   object and returns true if the headers match the current definition.</span></div><div class='line' id='LC1842'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1843'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1844'><span class="cm"> *</span></div><div class='line' id='LC1845'><span class="cm"> *  - respond –</span></div><div class='line' id='LC1846'><span class="cm"> *    `{function([status,] data[, headers, statusText])</span></div><div class='line' id='LC1847'><span class="cm"> *    | function(function(method, url, data, headers)}`</span></div><div class='line' id='LC1848'><span class="cm"> *    – The respond method takes a set of static data to be returned or a function that can return</span></div><div class='line' id='LC1849'><span class="cm"> *    an array containing response status (number), response data (string), response headers</span></div><div class='line' id='LC1850'><span class="cm"> *    (Object), and the text for the status (string).</span></div><div class='line' id='LC1851'><span class="cm"> *  - passThrough – `{function()}` – Any request matching a backend definition with</span></div><div class='line' id='LC1852'><span class="cm"> *    `passThrough` handler will be passed through to the real backend (an XHR request will be made</span></div><div class='line' id='LC1853'><span class="cm"> *    to the server.)</span></div><div class='line' id='LC1854'><span class="cm"> */</span></div><div class='line' id='LC1855'><br/></div><div class='line' id='LC1856'><span class="cm">/**</span></div><div class='line' id='LC1857'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1858'><span class="cm"> * @name $httpBackend#whenGET</span></div><div class='line' id='LC1859'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1860'><span class="cm"> * @description</span></div><div class='line' id='LC1861'><span class="cm"> * Creates a new backend definition for GET requests. For more info see `when()`.</span></div><div class='line' id='LC1862'><span class="cm"> *</span></div><div class='line' id='LC1863'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1864'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1865'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1866'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1867'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1868'><span class="cm"> */</span></div><div class='line' id='LC1869'><br/></div><div class='line' id='LC1870'><span class="cm">/**</span></div><div class='line' id='LC1871'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1872'><span class="cm"> * @name $httpBackend#whenHEAD</span></div><div class='line' id='LC1873'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1874'><span class="cm"> * @description</span></div><div class='line' id='LC1875'><span class="cm"> * Creates a new backend definition for HEAD requests. For more info see `when()`.</span></div><div class='line' id='LC1876'><span class="cm"> *</span></div><div class='line' id='LC1877'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1878'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1879'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1880'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1881'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1882'><span class="cm"> */</span></div><div class='line' id='LC1883'><br/></div><div class='line' id='LC1884'><span class="cm">/**</span></div><div class='line' id='LC1885'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1886'><span class="cm"> * @name $httpBackend#whenDELETE</span></div><div class='line' id='LC1887'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1888'><span class="cm"> * @description</span></div><div class='line' id='LC1889'><span class="cm"> * Creates a new backend definition for DELETE requests. For more info see `when()`.</span></div><div class='line' id='LC1890'><span class="cm"> *</span></div><div class='line' id='LC1891'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1892'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1893'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1894'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1895'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1896'><span class="cm"> */</span></div><div class='line' id='LC1897'><br/></div><div class='line' id='LC1898'><span class="cm">/**</span></div><div class='line' id='LC1899'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1900'><span class="cm"> * @name $httpBackend#whenPOST</span></div><div class='line' id='LC1901'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1902'><span class="cm"> * @description</span></div><div class='line' id='LC1903'><span class="cm"> * Creates a new backend definition for POST requests. For more info see `when()`.</span></div><div class='line' id='LC1904'><span class="cm"> *</span></div><div class='line' id='LC1905'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1906'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1907'><span class="cm"> * @param {(string|RegExp)=} data HTTP request body.</span></div><div class='line' id='LC1908'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1909'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1910'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1911'><span class="cm"> */</span></div><div class='line' id='LC1912'><br/></div><div class='line' id='LC1913'><span class="cm">/**</span></div><div class='line' id='LC1914'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1915'><span class="cm"> * @name $httpBackend#whenPUT</span></div><div class='line' id='LC1916'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1917'><span class="cm"> * @description</span></div><div class='line' id='LC1918'><span class="cm"> * Creates a new backend definition for PUT requests.  For more info see `when()`.</span></div><div class='line' id='LC1919'><span class="cm"> *</span></div><div class='line' id='LC1920'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1921'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1922'><span class="cm"> * @param {(string|RegExp)=} data HTTP request body.</span></div><div class='line' id='LC1923'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1924'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1925'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1926'><span class="cm"> */</span></div><div class='line' id='LC1927'><br/></div><div class='line' id='LC1928'><span class="cm">/**</span></div><div class='line' id='LC1929'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1930'><span class="cm"> * @name $httpBackend#whenPATCH</span></div><div class='line' id='LC1931'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1932'><span class="cm"> * @description</span></div><div class='line' id='LC1933'><span class="cm"> * Creates a new backend definition for PATCH requests.  For more info see `when()`.</span></div><div class='line' id='LC1934'><span class="cm"> *</span></div><div class='line' id='LC1935'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1936'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1937'><span class="cm"> * @param {(string|RegExp)=} data HTTP request body.</span></div><div class='line' id='LC1938'><span class="cm"> * @param {(Object|function(Object))=} headers HTTP headers.</span></div><div class='line' id='LC1939'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1940'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1941'><span class="cm"> */</span></div><div class='line' id='LC1942'><br/></div><div class='line' id='LC1943'><span class="cm">/**</span></div><div class='line' id='LC1944'><span class="cm"> * @ngdoc method</span></div><div class='line' id='LC1945'><span class="cm"> * @name $httpBackend#whenJSONP</span></div><div class='line' id='LC1946'><span class="cm"> * @module ngMockE2E</span></div><div class='line' id='LC1947'><span class="cm"> * @description</span></div><div class='line' id='LC1948'><span class="cm"> * Creates a new backend definition for JSONP requests. For more info see `when()`.</span></div><div class='line' id='LC1949'><span class="cm"> *</span></div><div class='line' id='LC1950'><span class="cm"> * @param {string|RegExp|function(string)} url HTTP url or function that receives the url</span></div><div class='line' id='LC1951'><span class="cm"> *   and returns true if the url match the current definition.</span></div><div class='line' id='LC1952'><span class="cm"> * @returns {requestHandler} Returns an object with `respond` and `passThrough` methods that</span></div><div class='line' id='LC1953'><span class="cm"> *   control how a matched request is handled.</span></div><div class='line' id='LC1954'><span class="cm"> */</span></div><div class='line' id='LC1955'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">e2e</span> <span class="o">=</span> <span class="p">{};</span></div><div class='line' id='LC1956'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">e2e</span><span class="p">.</span><span class="nx">$httpBackendDecorator</span> <span class="o">=</span></div><div class='line' id='LC1957'>&nbsp;&nbsp;<span class="p">[</span><span class="s1">&#39;$rootScope&#39;</span><span class="p">,</span> <span class="s1">&#39;$delegate&#39;</span><span class="p">,</span> <span class="s1">&#39;$browser&#39;</span><span class="p">,</span> <span class="nx">createHttpBackendMock</span><span class="p">];</span></div><div class='line' id='LC1958'><br/></div><div class='line' id='LC1959'><br/></div><div class='line' id='LC1960'><span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">clearDataCache</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1961'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">key</span><span class="p">,</span></div><div class='line' id='LC1962'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">cache</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">cache</span><span class="p">;</span></div><div class='line' id='LC1963'><br/></div><div class='line' id='LC1964'>&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="nx">key</span> <span class="k">in</span> <span class="nx">cache</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1965'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nb">Object</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">hasOwnProperty</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">cache</span><span class="p">,</span><span class="nx">key</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC1966'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">handle</span> <span class="o">=</span> <span class="nx">cache</span><span class="p">[</span><span class="nx">key</span><span class="p">].</span><span class="nx">handle</span><span class="p">;</span></div><div class='line' id='LC1967'><br/></div><div class='line' id='LC1968'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">handle</span> <span class="o">&amp;&amp;</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">(</span><span class="nx">handle</span><span class="p">.</span><span class="nx">elem</span><span class="p">).</span><span class="nx">off</span><span class="p">();</span></div><div class='line' id='LC1969'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">cache</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC1970'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1971'>&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1972'><span class="p">};</span></div><div class='line' id='LC1973'><br/></div><div class='line' id='LC1974'><br/></div><div class='line' id='LC1975'><span class="k">if</span><span class="p">(</span><span class="nb">window</span><span class="p">.</span><span class="nx">jasmine</span> <span class="o">||</span> <span class="nb">window</span><span class="p">.</span><span class="nx">mocha</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1976'><br/></div><div class='line' id='LC1977'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">currentSpec</span> <span class="o">=</span> <span class="kc">null</span><span class="p">,</span></div><div class='line' id='LC1978'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">isSpecRunning</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1979'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="o">!!</span><span class="nx">currentSpec</span><span class="p">;</span></div><div class='line' id='LC1980'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC1981'><br/></div><div class='line' id='LC1982'><br/></div><div class='line' id='LC1983'>&nbsp;&nbsp;<span class="nx">beforeEach</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1984'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">currentSpec</span> <span class="o">=</span> <span class="k">this</span><span class="p">;</span></div><div class='line' id='LC1985'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC1986'><br/></div><div class='line' id='LC1987'>&nbsp;&nbsp;<span class="nx">afterEach</span><span class="p">(</span><span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC1988'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">injector</span> <span class="o">=</span> <span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$injector</span><span class="p">;</span></div><div class='line' id='LC1989'><br/></div><div class='line' id='LC1990'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$injector</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1991'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$modules</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1992'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">currentSpec</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC1993'><br/></div><div class='line' id='LC1994'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">injector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC1995'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">injector</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;$rootElement&#39;</span><span class="p">).</span><span class="nx">off</span><span class="p">();</span></div><div class='line' id='LC1996'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">injector</span><span class="p">.</span><span class="nx">get</span><span class="p">(</span><span class="s1">&#39;$browser&#39;</span><span class="p">).</span><span class="nx">pollFns</span><span class="p">.</span><span class="nx">length</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC1997'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC1998'><br/></div><div class='line' id='LC1999'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">clearDataCache</span><span class="p">();</span></div><div class='line' id='LC2000'><br/></div><div class='line' id='LC2001'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">// clean up jquery&#39;s fragment cache</span></div><div class='line' id='LC2002'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">fragments</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2003'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">element</span><span class="p">.</span><span class="nx">fragments</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC2004'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2005'><br/></div><div class='line' id='LC2006'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">MockXhr</span><span class="p">.</span><span class="nx">$$lastInstance</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC2007'><br/></div><div class='line' id='LC2008'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">callbacks</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">val</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2009'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">delete</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">callbacks</span><span class="p">[</span><span class="nx">key</span><span class="p">];</span></div><div class='line' id='LC2010'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2011'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">callbacks</span><span class="p">.</span><span class="nx">counter</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></div><div class='line' id='LC2012'>&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2013'><br/></div><div class='line' id='LC2014'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2015'><span class="cm">   * @ngdoc function</span></div><div class='line' id='LC2016'><span class="cm">   * @name angular.mock.module</span></div><div class='line' id='LC2017'><span class="cm">   * @description</span></div><div class='line' id='LC2018'><span class="cm">   *</span></div><div class='line' id='LC2019'><span class="cm">   * *NOTE*: This function is also published on window for easy access.&lt;br&gt;</span></div><div class='line' id='LC2020'><span class="cm">   *</span></div><div class='line' id='LC2021'><span class="cm">   * This function registers a module configuration code. It collects the configuration information</span></div><div class='line' id='LC2022'><span class="cm">   * which will be used when the injector is created by {@link angular.mock.inject inject}.</span></div><div class='line' id='LC2023'><span class="cm">   *</span></div><div class='line' id='LC2024'><span class="cm">   * See {@link angular.mock.inject inject} for usage example</span></div><div class='line' id='LC2025'><span class="cm">   *</span></div><div class='line' id='LC2026'><span class="cm">   * @param {...(string|Function|Object)} fns any number of modules which are represented as string</span></div><div class='line' id='LC2027'><span class="cm">   *        aliases or as anonymous module initialization functions. The modules are used to</span></div><div class='line' id='LC2028'><span class="cm">   *        configure the injector. The &#39;ng&#39; and &#39;ngMock&#39; modules are automatically loaded. If an</span></div><div class='line' id='LC2029'><span class="cm">   *        object literal is passed they will be register as values in the module, the key being</span></div><div class='line' id='LC2030'><span class="cm">   *        the module name and the value being what is returned.</span></div><div class='line' id='LC2031'><span class="cm">   */</span></div><div class='line' id='LC2032'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">module</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">module</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2033'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">moduleFns</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC2034'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">isSpecRunning</span><span class="p">()</span> <span class="o">?</span> <span class="nx">workFn</span><span class="p">()</span> <span class="o">:</span> <span class="nx">workFn</span><span class="p">;</span></div><div class='line' id='LC2035'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">/////////////////////</span></div><div class='line' id='LC2036'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">workFn</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2037'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$injector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2038'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Injector already created, can not register a module!&#39;</span><span class="p">);</span></div><div class='line' id='LC2039'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2040'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modules</span> <span class="o">=</span> <span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$modules</span> <span class="o">||</span> <span class="p">(</span><span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$modules</span> <span class="o">=</span> <span class="p">[]);</span></div><div class='line' id='LC2041'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">moduleFns</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">module</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2042'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isObject</span><span class="p">(</span><span class="nx">module</span><span class="p">)</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">angular</span><span class="p">.</span><span class="nx">isArray</span><span class="p">(</span><span class="nx">module</span><span class="p">))</span> <span class="p">{</span></div><div class='line' id='LC2043'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modules</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kd">function</span><span class="p">(</span><span class="nx">$provide</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2044'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">angular</span><span class="p">.</span><span class="nx">forEach</span><span class="p">(</span><span class="nx">module</span><span class="p">,</span> <span class="kd">function</span><span class="p">(</span><span class="nx">value</span><span class="p">,</span> <span class="nx">key</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2045'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">$provide</span><span class="p">.</span><span class="nx">value</span><span class="p">(</span><span class="nx">key</span><span class="p">,</span> <span class="nx">value</span><span class="p">);</span></div><div class='line' id='LC2046'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2047'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2048'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">else</span> <span class="p">{</span></div><div class='line' id='LC2049'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modules</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="nx">module</span><span class="p">);</span></div><div class='line' id='LC2050'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2051'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">});</span></div><div class='line' id='LC2052'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2053'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2054'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2055'><br/></div><div class='line' id='LC2056'>&nbsp;&nbsp;<span class="cm">/**</span></div><div class='line' id='LC2057'><span class="cm">   * @ngdoc function</span></div><div class='line' id='LC2058'><span class="cm">   * @name angular.mock.inject</span></div><div class='line' id='LC2059'><span class="cm">   * @description</span></div><div class='line' id='LC2060'><span class="cm">   *</span></div><div class='line' id='LC2061'><span class="cm">   * *NOTE*: This function is also published on window for easy access.&lt;br&gt;</span></div><div class='line' id='LC2062'><span class="cm">   *</span></div><div class='line' id='LC2063'><span class="cm">   * The inject function wraps a function into an injectable function. The inject() creates new</span></div><div class='line' id='LC2064'><span class="cm">   * instance of {@link auto.$injector $injector} per test, which is then used for</span></div><div class='line' id='LC2065'><span class="cm">   * resolving references.</span></div><div class='line' id='LC2066'><span class="cm">   *</span></div><div class='line' id='LC2067'><span class="cm">   *</span></div><div class='line' id='LC2068'><span class="cm">   * ## Resolving References (Underscore Wrapping)</span></div><div class='line' id='LC2069'><span class="cm">   * Often, we would like to inject a reference once, in a `beforeEach()` block and reuse this</span></div><div class='line' id='LC2070'><span class="cm">   * in multiple `it()` clauses. To be able to do this we must assign the reference to a variable</span></div><div class='line' id='LC2071'><span class="cm">   * that is declared in the scope of the `describe()` block. Since we would, most likely, want</span></div><div class='line' id='LC2072'><span class="cm">   * the variable to have the same name of the reference we have a problem, since the parameter</span></div><div class='line' id='LC2073'><span class="cm">   * to the `inject()` function would hide the outer variable.</span></div><div class='line' id='LC2074'><span class="cm">   *</span></div><div class='line' id='LC2075'><span class="cm">   * To help with this, the injected parameters can, optionally, be enclosed with underscores.</span></div><div class='line' id='LC2076'><span class="cm">   * These are ignored by the injector when the reference name is resolved.</span></div><div class='line' id='LC2077'><span class="cm">   *</span></div><div class='line' id='LC2078'><span class="cm">   * For example, the parameter `_myService_` would be resolved as the reference `myService`.</span></div><div class='line' id='LC2079'><span class="cm">   * Since it is available in the function body as _myService_, we can then assign it to a variable</span></div><div class='line' id='LC2080'><span class="cm">   * defined in an outer scope.</span></div><div class='line' id='LC2081'><span class="cm">   *</span></div><div class='line' id='LC2082'><span class="cm">   * ```</span></div><div class='line' id='LC2083'><span class="cm">   * // Defined out reference variable outside</span></div><div class='line' id='LC2084'><span class="cm">   * var myService;</span></div><div class='line' id='LC2085'><span class="cm">   *</span></div><div class='line' id='LC2086'><span class="cm">   * // Wrap the parameter in underscores</span></div><div class='line' id='LC2087'><span class="cm">   * beforeEach( inject( function(_myService_){</span></div><div class='line' id='LC2088'><span class="cm">   *   myService = _myService_;</span></div><div class='line' id='LC2089'><span class="cm">   * }));</span></div><div class='line' id='LC2090'><span class="cm">   *</span></div><div class='line' id='LC2091'><span class="cm">   * // Use myService in a series of tests.</span></div><div class='line' id='LC2092'><span class="cm">   * it(&#39;makes use of myService&#39;, function() {</span></div><div class='line' id='LC2093'><span class="cm">   *   myService.doStuff();</span></div><div class='line' id='LC2094'><span class="cm">   * });</span></div><div class='line' id='LC2095'><span class="cm">   *</span></div><div class='line' id='LC2096'><span class="cm">   * ```</span></div><div class='line' id='LC2097'><span class="cm">   *</span></div><div class='line' id='LC2098'><span class="cm">   * See also {@link angular.mock.module angular.mock.module}</span></div><div class='line' id='LC2099'><span class="cm">   *</span></div><div class='line' id='LC2100'><span class="cm">   * ## Example</span></div><div class='line' id='LC2101'><span class="cm">   * Example of what a typical jasmine tests looks like with the inject method.</span></div><div class='line' id='LC2102'><span class="cm">   * ```js</span></div><div class='line' id='LC2103'><span class="cm">   *</span></div><div class='line' id='LC2104'><span class="cm">   *   angular.module(&#39;myApplicationModule&#39;, [])</span></div><div class='line' id='LC2105'><span class="cm">   *       .value(&#39;mode&#39;, &#39;app&#39;)</span></div><div class='line' id='LC2106'><span class="cm">   *       .value(&#39;version&#39;, &#39;v1.0.1&#39;);</span></div><div class='line' id='LC2107'><span class="cm">   *</span></div><div class='line' id='LC2108'><span class="cm">   *</span></div><div class='line' id='LC2109'><span class="cm">   *   describe(&#39;MyApp&#39;, function() {</span></div><div class='line' id='LC2110'><span class="cm">   *</span></div><div class='line' id='LC2111'><span class="cm">   *     // You need to load modules that you want to test,</span></div><div class='line' id='LC2112'><span class="cm">   *     // it loads only the &quot;ng&quot; module by default.</span></div><div class='line' id='LC2113'><span class="cm">   *     beforeEach(module(&#39;myApplicationModule&#39;));</span></div><div class='line' id='LC2114'><span class="cm">   *</span></div><div class='line' id='LC2115'><span class="cm">   *</span></div><div class='line' id='LC2116'><span class="cm">   *     // inject() is used to inject arguments of all given functions</span></div><div class='line' id='LC2117'><span class="cm">   *     it(&#39;should provide a version&#39;, inject(function(mode, version) {</span></div><div class='line' id='LC2118'><span class="cm">   *       expect(version).toEqual(&#39;v1.0.1&#39;);</span></div><div class='line' id='LC2119'><span class="cm">   *       expect(mode).toEqual(&#39;app&#39;);</span></div><div class='line' id='LC2120'><span class="cm">   *     }));</span></div><div class='line' id='LC2121'><span class="cm">   *</span></div><div class='line' id='LC2122'><span class="cm">   *</span></div><div class='line' id='LC2123'><span class="cm">   *     // The inject and module method can also be used inside of the it or beforeEach</span></div><div class='line' id='LC2124'><span class="cm">   *     it(&#39;should override a version and test the new version is injected&#39;, function() {</span></div><div class='line' id='LC2125'><span class="cm">   *       // module() takes functions or strings (module aliases)</span></div><div class='line' id='LC2126'><span class="cm">   *       module(function($provide) {</span></div><div class='line' id='LC2127'><span class="cm">   *         $provide.value(&#39;version&#39;, &#39;overridden&#39;); // override version here</span></div><div class='line' id='LC2128'><span class="cm">   *       });</span></div><div class='line' id='LC2129'><span class="cm">   *</span></div><div class='line' id='LC2130'><span class="cm">   *       inject(function(version) {</span></div><div class='line' id='LC2131'><span class="cm">   *         expect(version).toEqual(&#39;overridden&#39;);</span></div><div class='line' id='LC2132'><span class="cm">   *       });</span></div><div class='line' id='LC2133'><span class="cm">   *     });</span></div><div class='line' id='LC2134'><span class="cm">   *   });</span></div><div class='line' id='LC2135'><span class="cm">   *</span></div><div class='line' id='LC2136'><span class="cm">   * ```</span></div><div class='line' id='LC2137'><span class="cm">   *</span></div><div class='line' id='LC2138'><span class="cm">   * @param {...Function} fns any number of functions which will be injected using the injector.</span></div><div class='line' id='LC2139'><span class="cm">   */</span></div><div class='line' id='LC2140'><br/></div><div class='line' id='LC2141'><br/></div><div class='line' id='LC2142'><br/></div><div class='line' id='LC2143'>&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">ErrorAddingDeclarationLocationStack</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">errorForStack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2144'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">message</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">message</span><span class="p">;</span></div><div class='line' id='LC2145'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">name</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">name</span><span class="p">;</span></div><div class='line' id='LC2146'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">line</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">line</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">line</span><span class="p">;</span></div><div class='line' id='LC2147'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">sourceId</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">sourceId</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">sourceId</span><span class="p">;</span></div><div class='line' id='LC2148'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">stack</span> <span class="o">&amp;&amp;</span> <span class="nx">errorForStack</span><span class="p">)</span></div><div class='line' id='LC2149'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">this</span><span class="p">.</span><span class="nx">stack</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">stack</span> <span class="o">+</span> <span class="s1">&#39;\n&#39;</span> <span class="o">+</span> <span class="nx">errorForStack</span><span class="p">.</span><span class="nx">stack</span><span class="p">;</span></div><div class='line' id='LC2150'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">stackArray</span><span class="p">)</span> <span class="k">this</span><span class="p">.</span><span class="nx">stackArray</span> <span class="o">=</span> <span class="nx">e</span><span class="p">.</span><span class="nx">stackArray</span><span class="p">;</span></div><div class='line' id='LC2151'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2152'>&nbsp;&nbsp;<span class="nx">ErrorAddingDeclarationLocationStack</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span> <span class="o">=</span> <span class="nb">Error</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">toString</span><span class="p">;</span></div><div class='line' id='LC2153'><br/></div><div class='line' id='LC2154'>&nbsp;&nbsp;<span class="nb">window</span><span class="p">.</span><span class="nx">inject</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">mock</span><span class="p">.</span><span class="nx">inject</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2155'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">blockFns</span> <span class="o">=</span> <span class="nb">Array</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">slice</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">arguments</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></div><div class='line' id='LC2156'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">errorForStack</span> <span class="o">=</span> <span class="k">new</span> <span class="nb">Error</span><span class="p">(</span><span class="s1">&#39;Declaration Location&#39;</span><span class="p">);</span></div><div class='line' id='LC2157'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">return</span> <span class="nx">isSpecRunning</span><span class="p">()</span> <span class="o">?</span> <span class="nx">workFn</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="nx">currentSpec</span><span class="p">)</span> <span class="o">:</span> <span class="nx">workFn</span><span class="p">;</span></div><div class='line' id='LC2158'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="c1">/////////////////////</span></div><div class='line' id='LC2159'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">function</span> <span class="nx">workFn</span><span class="p">()</span> <span class="p">{</span></div><div class='line' id='LC2160'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">modules</span> <span class="o">=</span> <span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$modules</span> <span class="o">||</span> <span class="p">[];</span></div><div class='line' id='LC2161'><br/></div><div class='line' id='LC2162'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modules</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="s1">&#39;ngMock&#39;</span><span class="p">);</span></div><div class='line' id='LC2163'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">modules</span><span class="p">.</span><span class="nx">unshift</span><span class="p">(</span><span class="s1">&#39;ng&#39;</span><span class="p">);</span></div><div class='line' id='LC2164'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="kd">var</span> <span class="nx">injector</span> <span class="o">=</span> <span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$injector</span><span class="p">;</span></div><div class='line' id='LC2165'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">injector</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2166'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">injector</span> <span class="o">=</span> <span class="nx">currentSpec</span><span class="p">.</span><span class="nx">$injector</span> <span class="o">=</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">injector</span><span class="p">(</span><span class="nx">modules</span><span class="p">);</span></div><div class='line' id='LC2167'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2168'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">for</span><span class="p">(</span><span class="kd">var</span> <span class="nx">i</span> <span class="o">=</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">ii</span> <span class="o">=</span> <span class="nx">blockFns</span><span class="p">.</span><span class="nx">length</span><span class="p">;</span> <span class="nx">i</span> <span class="o">&lt;</span> <span class="nx">ii</span><span class="p">;</span> <span class="nx">i</span><span class="o">++</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2169'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">try</span> <span class="p">{</span></div><div class='line' id='LC2170'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* jshint -W040 *//* Jasmine explicitly provides a `this` object when calling functions */</span></div><div class='line' id='LC2171'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">injector</span><span class="p">.</span><span class="nx">invoke</span><span class="p">(</span><span class="nx">blockFns</span><span class="p">[</span><span class="nx">i</span><span class="p">]</span> <span class="o">||</span> <span class="nx">angular</span><span class="p">.</span><span class="nx">noop</span><span class="p">,</span> <span class="k">this</span><span class="p">);</span></div><div class='line' id='LC2172'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="cm">/* jshint +W040 */</span></div><div class='line' id='LC2173'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">catch</span> <span class="p">(</span><span class="nx">e</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2174'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">if</span> <span class="p">(</span><span class="nx">e</span><span class="p">.</span><span class="nx">stack</span> <span class="o">&amp;&amp;</span> <span class="nx">errorForStack</span><span class="p">)</span> <span class="p">{</span></div><div class='line' id='LC2175'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="k">new</span> <span class="nx">ErrorAddingDeclarationLocationStack</span><span class="p">(</span><span class="nx">e</span><span class="p">,</span> <span class="nx">errorForStack</span><span class="p">);</span></div><div class='line' id='LC2176'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2177'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="k">throw</span> <span class="nx">e</span><span class="p">;</span></div><div class='line' id='LC2178'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span> <span class="k">finally</span> <span class="p">{</span></div><div class='line' id='LC2179'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="nx">errorForStack</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></div><div class='line' id='LC2180'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2181'>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2182'>&nbsp;&nbsp;&nbsp;&nbsp;<span class="p">}</span></div><div class='line' id='LC2183'>&nbsp;&nbsp;<span class="p">};</span></div><div class='line' id='LC2184'><span class="p">}</span></div><div class='line' id='LC2185'><br/></div><div class='line' id='LC2186'><br/></div><div class='line' id='LC2187'><span class="p">})(</span><span class="nb">window</span><span class="p">,</span> <span class="nb">window</span><span class="p">.</span><span class="nx">angular</span><span class="p">);</span></div></pre></div></td>
          </tr>
        </table>
  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" class="js-jump-to-line" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="http://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.10911s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-fullscreen-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="js-fullscreen-contents" placeholder="" data-suggester="fullscreen_suggester"></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-remove-close close js-ajax-error-dismiss"></a>
      Something went wrong with that request. Please try again.
    </div>

  </body>
</html>

