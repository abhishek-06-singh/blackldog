import React from 'react';
import listing from '../../../../Data/Real_Estate.json';
import Navbar from '../../../components/minicomponents/Navbar';
import { Breadcrumb } from "antd"
import PropertyDetailsPage from './components/PropertyDetailsPage';

export default function DetailsPage({ params }) {
  const { id } = params;
  const property = listing.find((item) => item.id === id);
  if (!property) {
    return <div>Property not found</div>;
  }

  return (
    <div className="mt-0 w-full flex flex-col overflow-x-hidden">
      {/* Navbar */}
      <Navbar />
      {/* AntD Breadcrumb with custom separator */}
      <div className="ml-10 mt-4 text-textheading">
        <Breadcrumb  

          separator=">"
           className="text-textnormal"
          items={[
            {
              title: (
                <a className="text-textnormal" href="/dashboardexternalcollaborators/external-collaborators/sharedlisting">
                  <span className="text-textnormal font-bold">
                    Shared Listings
                  </span>

                </a>
              ),
            },
            {
              title: (
               <span className="text-textnormal font-bold">
                              
                  Property Details
                  </span>

               ),
            },
          ]}
        />
       
        </div>
         <div className="mt-6 p-2 md:px-10 space-y-4">
            <PropertyDetailsPage property={property} />
            </div>
        </div>
    
  );
}
