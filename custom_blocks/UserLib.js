$(function() {

    //Wait for Pinegrow to wake-up
    $("body").one("pinegrow-ready", function(e, pinegrow) {

        //Create new Pinegrow framework object
        var f = new PgFramework("UserLib", "UserLib");

        //This will prevent activating multiple versions of this framework being loaded
        f.type = "UserLib";
        f.allow_single_type = true;
        f.user_lib = true

        var comp_comp1 = new PgComponentType('comp1', 'Comp 1 / Div');
        comp_comp1.code = '<div class="row pg-empty-placeholder" data-pgc-define="verticalCarousel" data-pgc-define-name="Vertical Carousel" data-pgc-define-description="An animated vertical carousel" data-pgc-define-photo-preview-only data-pgc-section="Vertical Carousel" data-pgc="verticalCarouselComponent"\
data-pgc-repeat>\
    <section class="slide-wrapper">\
        <div class="container">\
            <div id="myCarousel" class="carousel slide">\
                <!-- Indicators -->\
                <ol class="carousel-indicators">\
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>\
                    <li data-target="#myCarousel" data-slide-to="1"></li>\
                    <li data-target="#myCarousel" data-slide-to="2"></li>\
                </ol>\
                <!-- Wrapper for slides -->\
                <div class="carousel-inner">\
                    <div class="item item1 active">\
                        <div class="fill" style=" background-color:#48c3af;">\
                            <div class="inner-content">\
                                <div class="carousel-img">\
                                    <img src="http://vocefalandoingles.com/wp-content/uploads/2016/09/sofa.png" alt="sofa" class="img img-responsive" />\
                                </div>\
                                <div class="carousel-desc">\
                                    <h2>Modern Designer Sofa</h2>\
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices\
                                        lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium lectus\
                                        iaculis eu. Ut ut viverra libero.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="item item2">\
                        <div class="fill" style="background-color:#b33f4a;">\
                            <div class="inner-content">\
                                <div class="carousel-img">\
                                    <img src="http://cdn.homedit.com/wp-content/uploads/2011/08/137CLUB2ST.png" alt="white-sofa" class="img img-responsive" />\
                                </div>\
                                <div class="carousel-desc">\
                                    <h2>Vintage Style Sofa</h2>\
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices\
                                        lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium lectus\
                                        iaculis eu. Ut ut viverra libero.</p>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                    <div class="item item3">\
                        <div class="fill" style="background-color:#7fc2f4;">\
                            <div class="inner-content">\
                                <div class="col-md-6">\
                                    <div class="carousel-img">\
                                        <img src="http://vocefalandoingles.com/wp-content/uploads/2016/09/sofa.png" alt="sofa" class="img img-responsive" />\
                                    </div>\
                                </div>\
                                <div class="col-md-6 text-left">\
                                    <div class="carousel-desc">\
                                        <h2>Stylish Sofa</h2>\
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit ipsum, scelerisque non semper eu, aliquet vel odio. Sed auctor id purus nec tristique. Donec euismod, urna vel dapibus tristique, dolor arcu ultrices\
                                            lectus, nec pulvinar est turpis sit amet felis. Duis interdum purus quam, vitae cursus erat ornare at. Donec congue mi a ipsum tincidunt, imperdiet vehicula odio rutrum. Nam porta vulputate magna, id pretium\
                                            lectus iaculis eu. Ut ut viverra libero.</p>\
                                    </div>\
                                </div>\
                            </div>\
                        </div>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </section>\
</div>';
        comp_comp1.parent_selector = null;
        f.addComponentType(comp_comp1);
        
        //Tell Pinegrow about the framework
        pinegrow.addFramework(f);
            
        var section = new PgFrameworkLibSection("UserLib_lib", "Components");
        //Pass components in array
        section.setComponentTypes([comp_comp1]);

        f.addLibSection(section);
   });
});