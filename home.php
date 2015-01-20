<?php
/*
Template Name: Home
*/
?>
<?php get_header(); ?>

<div class="container top-50 user-panel">
    
    <form class='usertype-form' action="" role='form' method="POST">
        <div class="row">
            <div class="col-md-4 col-sm-4 border-right home-topic-margin">
                <div class="home-topic">
                    <input class='hidden_submit'  type='submit' name='submit' value="prescribers">
                    <div class="icon icon-prescribers icon-center"></div>
                    <h1 class="text-blue home-title">For Prescribers</h1>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 border-right home-topic-margin">
                <div class="home-topic">
                    <input class='hidden_submit'  type='submit' name='submit' value="pharmacists">
                    <div class="icon icon-pharmacists icon-center"></div>
                    <h1 class="text-blue home-title">For Pharmacists</h1>
                </div>
            </div>
            <div class="col-md-4 col-sm-4 home-topic-margin">
                <div class="home-topic">
                    <input class='hidden_submit'  type='submit' name='submit' value="patients">
                    <div class="icon icon-patients icon-center"></div>
                    <h1 class="text-blue home-title">For Patients</h1>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class='user-select-form' >
                    <div class="form-group">
                        <label for="">
                            Would you like to save your settings for the next time you visit? <input name='saveSession' value='1' type="checkbox">
                        </label>
                    </div>
                </div>
            </div>
        </div>
    </form> 
</div>

<div class="main-about">
    <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <h1 class="white">About</h1>
                    <p>This website is dedicated to practicing Physicians, Pharmacists and other Clinical Professionals who care for patients with chronic pain using opioid medications</p>
                </div>
            </div>
    </div>
</div>


<?php get_footer(); ?>