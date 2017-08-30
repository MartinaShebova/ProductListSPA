import { validateUserData } from 'validateData';
export function reviews() {

    let reviewsArr = [],
        initialRatingScore = 0,
        averageRatingRow = $('<p />'),
        initialNumberOfReviews = 0;
    
    $('body').on('click', '#submitReviewBtn', (event) => {

        let userName = $.trim($(event.target).parent().parent().parent().find('#name').val()),
            userEmail = $.trim($(event.target).parent().parent().parent().find('#email').val()),
            userReview = $.trim($(event.target).parent().parent().parent().find('#review').val()),
            userRating = parseInt($('input[name=radio]:checked').val());

        let isUserDataValid = validateUserData(userName, userEmail, userReview, userRating);

        if (isUserDataValid) {
            return;
        }

        reviewsArr.push({
            userName: userName,
            userEmail: userEmail,
            userReview: userReview,
            userRating: userRating
        });

        /* Dynamically create user reviews panels START */
        let reviewPanel = $('<div />').addClass('panel panel-success'),
            reviewPanelHeading = $('<div />').addClass('panel-heading').html(userName),
            reviewPanelBody = $('<div />').addClass('panel-body');

        let email = $('<p />').html('<strong>User E-mail: </strong>' + userEmail),
            reviewText = $('<p />').html('User Review: ' + userReview),
            rating = $('<p />').html('<strong>User Rating: </strong>' + userRating + '/5');

        email.appendTo(reviewPanelBody);
        reviewText.appendTo(reviewPanelBody);
        rating.appendTo(reviewPanelBody);

        reviewPanelHeading.appendTo(reviewPanel);
        reviewPanelBody.appendTo(reviewPanel);
        reviewPanel.appendTo($('#userReviewWrapper'));
        /* Dynamically create user reviews panels END */

        // Remove the initial 'No Reviews for the product' paragraph
        $('#emptyReviews').remove();

        // Count number of reviews
        initialNumberOfReviews += 1;
        
        // Get total product rating
        initialRatingScore += userRating        

        // Show the average product rating
        let avgRating = (initialRatingScore / initialNumberOfReviews).toFixed(2);
        
        // Remove initial 'Average review score' paragraph
        $('#initialReviewScore').remove();

        // Update dynamically average product rating
        averageRatingRow.html('<strong class="text-danger">Average review score: </strong>' + avgRating);
        averageRatingRow.appendTo($('#averageRatingHolder'));
    });
}