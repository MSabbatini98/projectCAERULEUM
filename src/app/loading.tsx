import PageLoader from "next/dist/client/page-loader"
import "../app/styles/loading.scss"


export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="loader">
            <p>YES</p>
        </div>
    )
  }