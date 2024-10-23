// import React from 'react'

// function AffiliatePartnershipDetails() {
//   return (
//     <div>AffiliatePartnershipDetails</div>
//   )
// }

// export default AffiliatePartnershipDetails

import React from "react";
import { useParams, Link } from "react-router-dom";
import AffiliatePartnershipQns from "./AffiliatePartnershipQns";
// import { Link, useParams } from "react-router-dom";

const AffiliatePartnershipDetails = () => {
  const { routerLink } = useParams();
  const question = AffiliatePartnershipQns.find(
    (q) => q.routerLink === routerLink
  );

  if (!question) return <div>Question not found</div>;

  return (
    <div className="max-w-2xl mx-auto p-4">
      <div className="flex ">
        <Link to="/faq" className="text-blue-600 mb-4 block">
          FAQ
          <span> &gt;&nbsp;</span>
        </Link>
        <Link
          to="/faq/affiliate-partnership"
          className="text-blue-600 mb-4 block"
        >
          Two Step Rules - Stage 1
        </Link>
      </div>
      <h1 className="text-3xl font-bold mb-4">{question.question}</h1>
      <p className="text-gray-700 mb-4">{question.answer}</p>
      {question.lastUpdated && (
        <p className="text-sm text-gray-500">{question.lastUpdated}</p>
      )}
    </div>
  );
};

export default AffiliatePartnershipDetails;
