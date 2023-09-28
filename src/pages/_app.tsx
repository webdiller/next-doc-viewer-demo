import type { AppProps } from "next/app"
import { ReactElement, ReactNode } from "react"
import { NextPage } from "next"
import "@/shared/styles/globals.css"
import "flowbite"
import dynamic from "next/dynamic"
const Toaster = dynamic(
  import("react-hot-toast").then((module) => module.Toaster),
  {
    ssr: false,
  },
)

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page)
  return getLayout(
    <>
      <Component {...pageProps} />
      <Toaster position="bottom-right" />
    </>,
  )
}
