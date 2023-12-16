import { TwitterFollowCard } from './Twitter-card'

export function App() {
  const formatUserName = (userName) => `@${userName}`
  return (
    <>

      <TwitterFollowCard formatUserName={formatUserName} follow={false} name='Panditax' userName='fbnjeje'></TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} follow={true} name='David Hernandez' userName='Vsjee'></TwitterFollowCard>

      <TwitterFollowCard formatUserName={formatUserName} follow={true} name='Jhonatan Soto' userName='jhonatansoto45'></TwitterFollowCard>
    </>
  )
}