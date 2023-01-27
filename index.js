$(document).ready(function () {

    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollToTop').fadeIn();
        } else {
            $('.scrollToTop').fadeOut();
        }
    });

    $('.scrollToTop').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500);
        return false;
    });

    $(document).scroll(function () {
        var $nav = $(".nav-bg");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    });

    $('#pass2').keyup(function () {

        var pass = $('#pass').val();
        var cpwd = $('#pass2').val();

        if (pass != cpwd) {
            $('.error3').html('*Password does not match.');
            $('.error3').css('display', 'block');
            return false;
        } else {
            $('.error3').html('');
            $('.error3').css('display', 'none');
            return true;
        }
    });

    $('#confirm').click(function () {
        let value = $('#pass').val();

        if (value == '') {
            $('.error4').html('*Cannot be left empty');
            $('.error4').css('display', 'block');
            return false;
        } else {
            $('.error4').html();
            $('.error4').css('display', 'none');
            return true;
        }
    });

    $('#confirm').click(function () {
        let value = $('#email').val();

        if (value == '') {
            $('.error2').html('*Cannot be left empty');
            $('.error2').css('display', 'block');
            return false;
        } else {
            $('.error2').html();
            $('.error2').css('display', 'none');
            return true;
        }
    });

    $('#confirm').click(function () {
        let value = $('#name').val();

        if (value == '') {
            $('.error').html('*Cannot be left empty');
            $('.error').css('display', 'block');
            return false;
        } else {
            $('.error').html();
            $('.error').css('display', 'none');
            return true;
        }
    });

    $('#cnfrm').click(function () {
        let value_1 = $('#name_1').val();

        if (value_1 == '') {
            $('.error5').html('*Cannot be left empty');
            $('.error5').css('display', 'block');
            return false;
        } else {
            $('.error5').html('');
            $('.error5').css('display', 'none');
            return true;
        }
    });

    $('#cnfrm').click(function () {
        let value_2 = $('#pass_1').val();

        if (value_2 == '') {
            $('.error6').html('*Cannot be left empty');
            $('.error6').css('display', 'block');
            return false;
        } else {
            $('.error6').html('');
            $('.error6').css('display', 'none');
            return true;
        }
    });

    $('#cnfrm-2').click(function () {
        let value = $('#phone').val();

        if (value.length < 11) {
            $('.error').html("*Invalid number.");
            $('.error').css("display", "block");
            return false;
        } else {
            $('.error').html('');
            $('.error').css('display', 'none');
            return true;
        }
    });

    $('#cnfrm-2').click(function () {

        let value = $('#phone').val();

        if (value == "") {
            swal({
                title: "Error!",
                text: "Please fill all the fields!",
                icon: "error",
            });
            return false

        } else {
            swal({
                title: "Done!",
                text: "Your response is recorded!",
                icon: "success",
            });
            return false
        }

    });

    $(document).scroll(function () {
        var $nav = $(".drop-bg");
        $nav.toggleClass('scrolled1', $(this).scrollTop() > $nav.height());
    });

    $("#searchbtn").on("click", function (e) {
        e.preventDefault();

        let query = $("#searchquery").val();
        let url = "https://newsapi.org/v2/everything?q=" + query + "tesla&from=2022-12-02&sortBy=publishedAt&apiKey=84cea270a2ab46fe82308e94762a7e19";

        if (query !== "") {

            $.ajax({

                url: url,
                method: "GET",
                dataType: "json",

                success: function (news) {
                    let output = "";
                    let latestNews = news.articles;

                    for (var i in latestNews) {
                        output += `
                  <div class=" col-lg-5 mt-2 mr-auto ml-auto text-center">
                  <img src="${latestNews[i].urlToImage}" class="img-fluid rounded">
                  <p>${latestNews[i].content}</p>
                  <a href="${latestNews[i].url}" class="btn btn-primary mt-3 mb-3" target="_blank">Read more</a>
                  </div>
                `;
                    }

                    if (output !== "") {
                        $("#newsResults").html(output);

                    } else {
                        let noNews = `<div style='text-align:left; font-size:14px; margin-top:5px; color: red'>Try searching for something else </div>`;
                        $("#err-rslt").html(noNews);
                    }

                },

                error: function () {

                    let internetFailure = `
               <div style="font-size:14px; text-align:left; margin-top:5px; color: red">Please check your internet connection and try again.</div>`;

                    $("#err-rslt").html(internetFailure);
                }

            });

        } else {
            let missingVal = `<div style="font-size:14px; text-align:left; margin-top:5px; color: red">Please enter any search term</div>`;
            $("#err-rslt").html(missingVal);

        }

    });

});