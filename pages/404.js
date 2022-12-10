import { SparklesIcon } from "@heroicons/react/24/outline"
import Layout from "../parts/layout"

function Custom404() {
    return <Layout heading='迷失 ...'>
        <div className="text-amber-700 dark:text-amber-300 p-8 text-center">
            <SparklesIcon className="w-8 h-8 inline" />
            <span className="text-lg inline px-4 align-middle">页面不存在！</span>
        </div>
    </Layout>
}

export default Custom404