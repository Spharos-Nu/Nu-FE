import Image from 'next/image'
import { CiCamera } from 'react-icons/ci'
import { IoIosClose } from 'react-icons/io'
import { useImageStore } from './store'

export default function ImageArea() {
  const { imageItems, addImages, removeImages } = useImageStore()

  const handleButtonClick = () => {
    document.getElementById('goodsImage')?.click()
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFiles = e.target.files[0]
      const fileExtension = selectedFiles.name.split('.').pop()?.toLowerCase()

      if (
        fileExtension === 'jpg' ||
        fileExtension === 'jpeg' ||
        fileExtension === 'png'
      ) {
        const reader = new FileReader()
        reader.readAsDataURL(selectedFiles)
        addImages({
          id: Date.now(),
          url: selectedFiles,
          previewUrl: URL.createObjectURL(selectedFiles),
        })
      }

      console.log(imageItems)
    }
  }

  return (
    <>
      <div className="text-[#2B74B9] text-[17px]">굿즈 이미지</div>
      <div className="flex flex-row">
        <div className="mt-[5px] mb-[20px] w-[100px] h-[100px] rounded-lg bg-[#F7F7F7] content-center">
          <CiCamera
            className="w-[30px] h-[30px] m-auto"
            onClick={handleButtonClick}
          />
        </div>
        <input
          type="file"
          multiple
          accept=".jpg, .jpeg, .png"
          id="goodsImage"
          onChange={handleFileChange}
          className="overflow-hidden absolute w-[1px] h-[1px] text-[0px]"
        />
        <div className="w-full whitespace-nowrap overflow-x-auto">
          <ul className="flex flex-row flex-nowrap mb-[10px] mr-[5px] w-fit">
            {imageItems.map((file) => (
              <li
                key={file.id}
                className="mt-[5px] mb-[20px] w-[100px] h-[100px] ml-[10px] relative"
              >
                <Image
                  src={file.previewUrl}
                  alt="굿즈 이미지"
                  width={100}
                  height={100}
                  className="rounded-lg"
                />
                <IoIosClose
                  className="w-[25px] h-[25px] absolute top-0 right-0"
                  onClick={() => removeImages(file)}
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
