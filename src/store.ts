import { InputAction, Material, MeshCollider, MeshRenderer,  pointerEventsSystem } from '@dcl/sdk/ecs'
import { Vector3 } from '@dcl/sdk/math'
import { GltfContainer, Transform, executeTask } from '@dcl/sdk/ecs'
import ReactEcs, { ReactEcsRenderer, UiEntity } from '@dcl/sdk/react-ecs'
import { engine } from '@dcl/sdk/ecs'
import { Quaternion } from '@dcl/sdk/math'




export const createStore = () => {

  let store = engine.addEntity()

  GltfContainer.create(store, {
    src: 'models/dhingia_builds_06_size_2x1.glb'
  })

  Transform.create(store, {
    position: Vector3.create(8,0,16),
    scale: Vector3.create(1,1,1),
    rotation: Quaternion.fromEulerDegrees(0, 180, 0)
  
  })


  
 let shelf = engine.addEntity()

 GltfContainer.create(shelf, {
   src: 'models/grocery_store_shelf.glb'
 })

 Transform.create(shelf, {
   position: Vector3.create(2, 0, 17),
   scale: Vector3.create(1,2.7,1),
 })

 let shelf2 = engine.addEntity()

 GltfContainer.create(shelf2, {
   src: 'models/grocery_store_shelf.glb'
 })

 Transform.create(shelf2, {
   position: Vector3.create(2, 0, 10),  
   scale: Vector3.create(1,2.7,1),
 })

 let shelf3 = engine.addEntity()

 GltfContainer.create(shelf3, {
   src: 'models/grocery_store_shelf.glb'
 })

 Transform.create(shelf3, {
   position: Vector3.create(2, 0, 25),
   scale: Vector3.create(1,2.7,1),
 })

 let shelf4 = engine.addEntity()

 GltfContainer.create(shelf4, {
   src: 'models/grocery_store_shelf.glb'
 })

 Transform.create(shelf4, {
   position: Vector3.create(14, 0, 23.5),
   scale: Vector3.create(1,2.7,1),
 })

 let shelf5 = engine.addEntity()

 GltfContainer.create(shelf5, {
   src: 'models/grocery_store_shelf.glb'
 })

 Transform.create(shelf5, {
   position: Vector3.create(14, 0, 28),
   scale: Vector3.create(1,2.7,1),
 })


 const ads1 = engine.addEntity()

 Transform.create(ads1, {
   position: Vector3.create(2, 3, 13.5),
   scale: Vector3.create(2.5,4,1),
   rotation: Quaternion.fromEulerDegrees(0, 270, 0)
 })
 
 MeshRenderer.setPlane(ads1)
 Material.setBasicMaterial(ads1, {
  texture: Material.Texture.Common({
    src: 'https://business.dglive.org/api/downloadFile/247',
  }),
})

const ads2 = engine.addEntity()

Transform.create(ads2, {
  position: Vector3.create(2, 3, 21),
  scale: Vector3.create(3,4,1),
  rotation: Quaternion.fromEulerDegrees(0, 270, 0)
})

MeshRenderer.setPlane(ads2)
Material.setBasicMaterial(ads2, {
 texture: Material.Texture.Common({
   src: 'https://business.dglive.org/api/downloadFile/162',
 }),
})

const ads3 = engine.addEntity()

Transform.create(ads3, {
  position: Vector3.create(2, 3, 29),
  scale: Vector3.create(2.5,4,1),
  rotation: Quaternion.fromEulerDegrees(0, 270, 0)
})

MeshRenderer.setPlane(ads3)
Material.setBasicMaterial(ads3, {
 texture: Material.Texture.Common({
   src: 'https://business.dglive.org/api/downloadFile/161',
 }),
})


}
