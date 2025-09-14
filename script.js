  function outputPanel() {
            $("iframe").contents().find("html").html("<html><head><style type='text/css'>" + $("#cssPanel").val() + "</style><body>" +  $("#htmlPanel").val() + "</body></html>");


             document.getElementById("outputPanel").contentWindow.eval($("#javascriptPanel").val());
             
        }

        $(".togglebutton").hover(function() {

            $(this).addClass("highlightedbutton");

        }, function() {

            $(this).removeClass("highlightedbutton")
        });

        $(".togglebutton").click(function() {

            $(this).toggleClass("active");

            $(this).removeClass("highlightedbutton");

            var panelId = $(this).attr("id") + "Panel";

            $("#" + panelId).toggleClass("hidden");

            var numberOfActivePanels = 4 - $(".hidden").length;

            $(".panel").width(($(window).width() / numberOfActivePanels) - 10);



        });

        $(".panel").height($(window).height() - $("#header").height() - 15);

        $(".panel").width(($(window).width() / 2) - 10);

        outputPanel();

       $("textarea").on('change keyup paste', function() {
         
        outputPanel();

       });
