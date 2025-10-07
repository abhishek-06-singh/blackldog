import React from 'react'
import PropertyImage from './PropertyImage'
import DetailHeading from './DetailHeading'
import PropertyStats_Listing from './PropertyStats_Listing'
import DocumentSignature from './DocumentSignature'
import Description from './Description'
import Map from './Map'
import PropertyDetail from './PropertyDetail'
import listings from "../../../../../Data/Real_Estate.json"
import MediaGallery from './MediaGallery'

export default function PropertyDetailsPage({ property }) {
  return (
    <div className="w-full space-y-4 ">
      <DetailHeading property={property} />
      <PropertyImage property={property} />

      <div className="w-full flex flex-col md:flex-row md:items-stretch space-y-4 md:space-y-0 md:space-x-4">
  {/* Left Column */}
  <div className="w-full md:mb-6 md:w-8/12 flex flex-col space-y-4 text-textnormal h-full">
    <PropertyStats_Listing property={property} />
    <Description property={property} />
    <PropertyDetail  />
    <MediaGallery listings={listings.slice(0, 3)} />
  </div>

  {/* Right Column */}
  <div className="w-full md:w-4/12 flex flex-col space-y-4 text-textnormal h-full">
    <DocumentSignature property={property} />
    <Map property={property} />
  </div>
</div>


    </div>
  )
}
