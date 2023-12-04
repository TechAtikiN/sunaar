'use client'

// named imports
import { useEffect, useState } from 'react'
import { storage } from '@/firebase'
import { ref, uploadBytes, listAll, getDownloadURL } from 'firebase/storage'
import { v4 } from 'uuid'

export default function UploadProduct() {
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
  }, [])
  return (
    <div>
      <input
        onChange={(e) => setImage(!e.target.files ? null : e.target.files[0])}
        type='file'
      />
      <button className='dashboard-btn' onClick={handleImageUpload}>Upload image</button>
    </div>
  )
}
