

import ReactEcs, { Button, Label, ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import * as ecs from '@dcl/sdk/ecs'
import { connectToEcommerce, OBStoreUI } from 'onlybags-ecommerce-sdk'


connectToEcommerce(1, ecs)


export function setupUi() {
  ReactEcsRenderer.setUiRenderer(uiComponent)
}

const uiComponent = () => (
  <UiEntity uiTransform={{ width: '100%' }}>
   
  <OBStoreUI />
</UiEntity>
)



