import PageLoader from "next/dist/client/page-loader";

export default function Loading() {
    // You can add any UI inside Loading, including a Skeleton.
    return (
        <div className="loader">
            <p>YES</p>
        </div>
    )
  }