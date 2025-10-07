import SupportCTA from './SupportCTA'
import DocumentationFaqs from './DocumentationFaqs'
import VideoTutorials from './VideoTutorials'
import PopularArticles from './PopularArticles'

export default function Help_Page() {
    return (
        <div className="w-full h-full py-6 px-2 md:px-6 lg:px-10 space-y-6">
            <DocumentationFaqs/>
            <VideoTutorials/>
            <PopularArticles/>
            <SupportCTA />
        </div>
    )
}
