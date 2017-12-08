// Initialize your app
var myApp = new Framework7({
    swipePanel: 'left'
});

// Export selectors engine
var $$ = Dom7;

// Add view
var mainView = myApp.addView('.view-main', {
    // Because we use fixed-through navbar we can enable dynamic navbar
    dynamicNavbar: true
});

myApp.onPageInit('index', function(page){

});

myApp.onPageInit('geo', function (page) {
    // Default
    var x = true;
    var calendarDefault = myApp.calendar({
        input: '#calendar1',
        onClose: function (calendar) {
            if(x){
                myApp.modal({
                title:  'В этот день вы добавили',
                text: 'Иван Иванов',
                buttons: [
                  {
                    text: 'Продолжить',
                    onClick: function() {
                      //myApp.alert('ПРОДОЛЖАЕМ')
                    }
                  },
                  {
                    text: 'Отмена',
                    onClick: function() {
                      //myApp.alert('ОТМЕНЯЕМ')
                    }
                  },
                ]
              });
            }else{
                myApp.alert('Ошибка', 'К сожалению, вы никого не добавляли в этот день.');
            }
        }
    });
});

myApp.onPageInit('reg', function (page) {
        function getNumber(element) {
                    if ($$(element).prev().length !== 0) {
                        counter++;
                        getNumber($$(element).prev());
                    }
 
                    return counter;
                }
 
                $$('.chip').click(function () {
                    counter = 0;
                    var number = getNumber(this) + 1;
                    if($$(".chip:nth-child("+number+")").css("background-color") == 'rgb(255, 165, 0)'){
                        $$(".chip:nth-child("+number+")").css("background", "rgba(0, 0, 0, 0.37)");
                    }else{
                        $$(".chip:nth-child("+number+")").css("background", "orange");
                    }
                    console.log();
                });
    $$('.form-to-data').on('click', function(){
      var formData = myApp.formToData('#my-form');
      alert(JSON.stringify(formData));
    });
});

// Callbacks to run specific code for specific pages, for example for About page:
myApp.onPageInit('about', function (page) {
    // run createContentPage func after link was clicked
    $$('.create-page').on('click', function () {
        createContentPage();
    });
});

// Generate dynamic page
var dynamicPageIndex = 0;
function createContentPage() {
	mainView.router.loadContent(
        '<!-- Top Navbar-->' +
        '<div class="navbar">' +
        '  <div class="navbar-inner">' +
        '    <div class="left"><a href="#" class="back link"><i class="icon icon-back"></i><span>Back</span></a></div>' +
        '    <div class="center sliding">Dynamic Page ' + (++dynamicPageIndex) + '</div>' +
        '  </div>' +
        '</div>' +
        '<div class="pages">' +
        '  <!-- Page, data-page contains page name-->' +
        '  <div data-page="dynamic-pages" class="page">' +
        '    <!-- Scrollable page content-->' +
        '    <div class="page-content">' +
        '      <div class="content-block">' +
        '        <div class="content-block-inner">' +
        '          <p>Here is a dynamic page created on ' + new Date() + ' !</p>' +
        '          <p>Go <a href="#" class="back">back</a> or go to <a href="services.html">Services</a>.</p>' +
        '        </div>' +
        '      </div>' +
        '    </div>' +
        '  </div>' +
        '</div>'
    );
	return;
}