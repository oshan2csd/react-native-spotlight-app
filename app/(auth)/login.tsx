import { styles } from '@/styles/auth.styles'
import { Ionicons } from '@expo/vector-icons'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { COLORS } from '../constants/theme'

export default function login() {
//   const { signIn, setActive, isLoaded } = useSignIn()
//   const router = useRouter()

//   const [emailAddress, setEmailAddress] = React.useState('')
//   const [password, setPassword] = React.useState('')

//   // Handle the submission of the sign-in form
//   const onSignInPress = async () => {
//     if (!isLoaded) return

//     // Start the sign-in process using the email and password provided
//     try {
//       const signInAttempt = await signIn.create({
//         identifier: emailAddress,
//         password,
//       })

//       // If sign-in process is complete, set the created session as active
//       // and redirect the user
//       if (signInAttempt.status === 'complete') {
//         await setActive({ session: signInAttempt.createdSessionId })
//         router.replace('/')
//       } else {
//         // If the status isn't complete, check why. User might need to
//         // complete further steps.
//         console.error(JSON.stringify(signInAttempt, null, 2))
//       }
//     } catch (err) {
//       // See https://clerk.com/docs/custom-flows/error-handling
//       // for more info on error handling
//       console.error(JSON.stringify(err, null, 2))
//     }
//   }

  return (
    <View style={styles.container}>        
        {/* BRAND SECTION */}
        <View style={styles.brandSection}>
            <View style={styles.logoContainer}>
                <Ionicons name="leaf" size={32} color={COLORS.primary} />
            </View>
            <Text style={styles.appName}>spotlight</Text>
            <Text style={styles.tagline}>don't miss anything</Text>            
        </View>

        {/* ILLUSTRATION */}
        <View style={styles.illustrationContainer}>
            <Image
                source={require('../../assets/images/auth-bg-1.png')}  
                style={styles.illustration}
                resizeMode="cover"
            />
        </View>

        {/* LOGIN SECTION */}
        <View style={styles.loginSection}>
            {/* GOOGLE SIGN-IN BUTTON */}
            <TouchableOpacity
                style={styles.googleButton}
                onPress={() => {
                    console.log('Google Sign-In Pressed');
                    // TODO: Handle Google Sign-In here
                }}
                activeOpacity={0.5}
            >
                <Ionicons name="logo-google" size={24} color={COLORS.primary} />
                <Text style={styles.googleButtonText}>Sign in with Google</Text>
            </TouchableOpacity>
            
            {/* email/password sign-in */}
            {/* <TouchableOpacity
                style={styles.googleButton}
                onPress={() => {
                    console.log('Email Sign-In Pressed');
                    // TODO: Handle email/password sign-in here
                }}      
            >
                <Ionicons name="mail" size={24} color={COLORS.primary} />
                <Text style={styles.googleButtonText}>Sign in with Email</Text>
            </TouchableOpacity> */}
            
            <Text style={styles.termsText}>
                By signing in, you agree to our terms and privacy policy.
            </Text>
        </View>
    </View>
  )
}