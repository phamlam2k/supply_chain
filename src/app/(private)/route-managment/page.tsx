import dynamic from 'next/dynamic'

const RouterMngtTemplate = dynamic(
  () => import('@/src/module/route-management/templates/route-mngt.template'),
  {
    ssr: false,
    loading: () => <p>Loading...</p>
  }
)

const RouteMngtPage = () => {
  return <RouterMngtTemplate />
}

export default RouteMngtPage
