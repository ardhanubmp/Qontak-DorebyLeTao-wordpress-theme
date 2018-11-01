<html>
   <head>
      <!-- <title>DorebyLeTao</title>
      <link rel="stylesheet" href="style.css"> -->
    <meta charset="<?php bloginfo('charset'); ?>" />
     <title>
    <?php 
        wp_title('|', true, 'right');
        bloginfo('name');
    ?>
     </title>
     <link rel="stylesheet" type="text/css" media="all" href="<?php bloginfo('stylesheet_url'); ?>" />
     <link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />
     <?php if ( is_singular() && get_option('thread_comments') )
        wp_enqueue_script('comment-reply');
        wp_head();
     ?>
   </head>
   <body>
        <div id="wrap">
        <div id="header">
        <h1 class="blogtitle"><?php bloginfo('name');?></h1>
        <p class="description"><?php bloginfo('description');?></p>
        <div id="menu">
            <ul>
            <li><a href="<?php bloginfo('url');?>">Home</a></li>
            <?php wp_list_pages('title_li='); ?>
            </ul>
        </div>
        </div>
        <div id="maincontent">
            <div id="content">
            Artikel akan muncul disini
        </div>
        <div id="sidebar">
            <div id="lebar">
                Iklan kotak ada disini
            </div>
            <div id="kiri">
                Menu-menu sidebar kiri ada disini
            </div>
            <div id="kanan">
                Menu-menu sidebar kanan ada disini
            </div>
        </div>
        </div>
        <div style="clear:both;"></div>
        <div id="footer">
            Footer ada disini
        </div>
        </div>
   </body>
</html>