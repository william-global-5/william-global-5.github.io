// Global-5
// William Reithmeyer
// Navigation Display based on page

$(document).ready(function(){
    var location = window.location.pathname;

    var secondary="", tertiary="", quaternary="", quaternary2="";


    // Menu Template
    // var MENUNAME = [[ 'SUBSTRING FOUND IN URL', 'URL OF MENU ITEM', 'NAME OF MENU ITEM'], ...];


    var mainPages = [['agencies', '/agencies.html', 'Agencies'],
                    ['standards', '/standards.html', 'Standards'],
                    ['new-construction', '/new-construction.html', 'New Construction'],
                    ['operations', '/operations.html', 'Operations &amp;<br>Maintenance'],
                    ['training', '/training.html', 'New Users/<br>Training']];

    var newConstruction =   [['contractor', '/new-construction/contractor-consultant.html', 'Contractor &amp; Consultants'],
                            ['engineering', '/new-construction/construction-engineering-inspection.html', 'Construction, Engineering &amp; Inspections']];

    var contractor =    [['data-collection', '/new-construction/contractor/data-collection-forms.html', 'Data Collection Forms'],
                        ['gps-mapping', '/new-construction/contractor/gps-mapping.html', 'GPS Mapping'],
                        ['feature-import-templates', '/new-construction/contractor/feature-import-templates.html', 'Feature Import Templates']];

    var gpsMapping =    [['baseline-mapping', '/new-construction/contractor/gps-mapping/baseline-mapping-files.html', 'Baseline Mapping Files'],
                        ['gps-export', '/new-construction/contractor/gps-mapping/gps-export-route.html', 'GPS Export Route'],
                        ['cable-mapping', '/new-construction/contractor/gps-mapping/cable-mapping.html', 'Cable Mapping']];

    var featureImport =     [['how-to', '/new-construction/contractor/feature-import-templates/how-to-populate.html', 'How-to Populate Import Templates'],
                            ['faq', '/new-construction/contractor/feature-import-templates/faq.html', 'FAQ'],
                            ['down', '/new-construction/contractor/feature-import-templates/download-feature-import-templates.html', 'Download Feature Import Templates']];

    // build the menu step by step
    //          = createMenu(0=main menu|name of parent menu, array of menus above, submenu class name)
    primary     = createMenu(0, mainPages, "");
    secondary   = createMenu("new-construction", newConstruction, "sn1");
    tertiary    = createMenu("contractor", contractor, "sn2");
    quaternary  = createMenu("gps-mapping", gpsMapping, "sn3");
    quaternary2 = createMenu("feature-import-template", featureImport, "sn3");

    // write the menu to the #nav div
    $('#navigation').html(primary + secondary + tertiary + quaternary + quaternary2);


    // FUNCTIONS
    // !!!!!!!!!
    function createMenu(menuSpot, menuArray, tier){
        // create a menu if the subtext is found in the url
        if (location.indexOf(menuSpot) >= 0 || menuSpot == 0) {
            var className="sub-navigation " + tier;
            var subClassName="sub-nav";
            var tabs="";
            var pages = menuArray;

            for(i=0; i < pages.length; i++){
                tabs += '<li' + select(pages[i][0]) + '><span><a href=' + pages[i][1] + '>' + pages[i][2] + '</a></span></li>';
            }

            if (tier == ""){
                className = "top-navigation";
                subClassName = "top-nav";
            }

            return '<div class="' + className + '">' +
                '<div class="' + subClassName + '">' +
                    '<ul>' +
                        tabs +
                    '</ul>' +
                '</div>' +
            '</div>';
        }
        return "";

    }

    function select(value) {
        // if the value is within the location mark tab as selected.
        // the more characters, the better to prevent duplicate tab names

        if (location.indexOf(value) >= 0){
            return ' class="selected" ';
        }
        return "";
    }
});
