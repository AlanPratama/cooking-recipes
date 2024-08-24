import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect, useState } from "react"
import Animated from "react-native-reanimated"

export const CachedImage = (props) => {
    const [cachedSource, setCachedSource] = useState(null)
    const { uri } = props

    useEffect(() => {
        const getCachedImage = async () => {
            try {
                const cachedImageData = await AsyncStorage.getItem(uri)
                
                if(cachedImageData) {
                    setCachedSource({ uri: cachedImageData })
                } else {
                    const res = await fetch(uri)
                    const imageBlob = await res.blob()
                    const base64Data = await new Promise((resolve) => {
                        const reader = new FileReader()
                        reader.readAsDataURL(imageBlob)
                        reader.onloadend = () => {
                            resolve(reader.result)
                        }
                    })

                    await AsyncStorage.setItem(uri, base64Data)
                    setCachedSource({ uri: base64Data })
                }

            } catch (error) {
                console.error("error: ", error.message);
            }
        }

        getCachedImage()
    }, [])

    return <Animated.Image source={cachedSource} {...props} />
}