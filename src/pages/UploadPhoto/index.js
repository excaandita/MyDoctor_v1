import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button, Gap, Header, Link } from '../../components'
import { IconAddPhoto, ILNullPhoto } from '../../assets'
import { colors, fonts } from '../../utils'

const UploadPhoto = ({navigation}) => {
  return (
    <View style={styles.page}>
      <Header title="Upload Foto" onPress={() => navigation.goBack()} />
      <View style={styles.content}>
        <View style={styles.profile}>
            <View style={styles.avatarWrapper}>
                <Image source={ILNullPhoto} style={styles.avatar} />
                <IconAddPhoto style={styles.addPhoto}/>
            </View>
            <Text style={styles.name}>Luli Luli</Text>
            <Text style={styles.job}>Pengembara Sapi</Text>
        </View>
        
        <View>
            <Button title="Upload dan Lanjutkan"/>
            <Gap height={30} />
            <Link title="Skip for this" align="center" size={16} />
        </View>
      </View>
    </View>
  )
}

export default UploadPhoto

const styles = StyleSheet.create({
    page: {
        flex: 1,
        backgroundColor: colors.white
    },
    avatar: {
        width: 110,
        height: 110,
    },
    avatarWrapper: {
        width: 130,
        height: 130,
        borderWidth: 1,
        borderColor: colors.border,
        borderRadius: 130 / 2,
        alignItems: 'center',
        justifyContent: 'center',
    },
    addPhoto: {
        position: 'absolute',
        bottom: 8,
        right: 6,
    },
    name: {
        fontFamily: fonts.primary[600],
        fontSize: 24,
        color: colors.text.primary,
        textAlign: 'center',
    },
    job: {
        fontSize: 18,
        fontFamily: fonts.primary.normal,
        textAlign: 'center',
        color: colors.text.secondary,
        marginTop: 4,
    },
    content: {
        paddingHorizontal: 40,
        paddingBottom: 64,
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'space-between'
    },
    profile: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center'
    }
})