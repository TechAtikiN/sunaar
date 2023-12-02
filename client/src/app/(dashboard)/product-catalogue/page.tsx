'use client'

// named imports
import { useEffect, useRef, useState } from 'react'
import { storage } from '@/firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

// default imports
import Image from 'next/image'

export default function ProductCatalogue() {
  const [image, setImage] = useState<any>(null)
  const [products, setProducts] = useState<string[]>([])

  const productListRef = ref(storage, 'images/bracelet')

  const handleImageUpload = () => {
    if (image === null) return

    const imageRef = ref(storage, `images/bracelet/${image.name + v4()}`)
    uploadBytes(imageRef, image).then((snapshot) => {
      getDownloadURL(snapshot.ref).then((url) => {
        setProducts((prev) => [...prev, url])
      })
    })
  }

  useEffect(() => {
    listAll(productListRef).then((res) => {
      res.items.forEach((item) => {
        getDownloadURL(item).then((url) => {
          setProducts((prev) => [...prev, url])
        })
      })
    })
    console.log('Products loaded')
  }, [])

  return (
    <div className='page'>
      <h2 className='heading'>Products Catalogue</h2>
      <input
        onChange={(e) => setImage(!e.target.files ? null : e.target.files[0])}
        type='file'
      />
      <button className='dashboard-btn' onClick={handleImageUpload}>Upload image</button>

      <div className='section my-5 flex flex-wrap space-x-5 space-y-5'>
        {products.map((product, index) => (
          <div key={index} className='relative h-[250px] w-[250px]'>
            <Image
              fill
              alt={'poduct-image'} src={product} />
          </div>
        ))}
      </div>
    </div>
  )
}
