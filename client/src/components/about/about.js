import React from 'react'


function About() {
    return(
        <section className="section section_discover">
            <div className="container">
                <div className="row">
                    <div className="col-md-2 align-self-start">

                        <!-- Description -->
                        <p className="section_discover__description">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                        </p>

                    </div>
                    <div className="col-md-4 align-self-start">

                        <!-- Image -->
                        <div className="section_discover__img">
                            <img src="assets/img/2.jpg" className="img-fluid" alt="...">
                        </div>

                    </div>
                    <div className="col-md-6 align-self-center">

                        <!-- Content -->
                        <h2><em>Lorem ipsum</em> dolor sit amet</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi,
                            consequatur, laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam
                            asperiores, blanditiis, consectetur. Possimus facilis velit, voluptatibus!
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis deleniti non, voluptate
                            architecto, harum suscipit dignissimos eaque voluptatibus nobis natus error iure
                            exercitationem. Officia facilis, maiores atque delectus commodi rerum.
                        </p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur qui, itaque,
                            accusantium accusamus eum voluptate ducimus eligendi laboriosam alias mollitia omnis harum
                            et ut quaerat, minus repellendus sint. Inventore, iure.
                        </p>

                    </div>
                </div>
                <!-- / .row -->
            </div>
            <!-- / .container -->
        </section>
    )

}
export default About