import React from "react";
function ReviewCard({review,currentUserId,removeReview})
{
  function handleRemove()
  {
     removeReview(review);
  }
   return (<div class="card">
       <div class="card-body">
       <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
       <p class="card-text"><small class="text-muted">@Username</small></p>
       {(review.by===currentUserId)&&(<button onClick={handleRemove}>Delete</button>)}
       </div>
      </div>);
}
export default ReviewCard;