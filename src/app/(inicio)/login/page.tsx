'use client'
import { useForm } from 'react-hook-form'
import { useState } from 'react'
import { Box, Button, Card, Grid, Typography } from '@mui/material'
import { FormInputText } from '../../../components/form'
import ProgresoLineal from '../../../components/progreso/ProgresoLineal'
import { WebService } from '../../../services'
import { Constantes } from '../../../config'
import { guardarCookie } from '../../../utils/cookies'
import { useRouter } from 'next/navigation'
import { imprimir } from '../../../utils/imprimir'
export interface LoginType {
  usuario: string
  contrasena: string
}

const LoginContainer = () => {
  const { handleSubmit, control } = useForm<LoginType>({
    defaultValues: {},
  })

  const [loading, setLoading] = useState<boolean>(false)
  const router = useRouter()

  const iniciarSesion = async ({ usuario, contrasena }: LoginType) => {
    try {
      setLoading(true)
      const response = await WebService.post({
        url: `${Constantes.baseUrl}/api/auth/login` ?? '',
        body: { email: usuario, password: contrasena },
      })
      imprimir(`URL DE ACCESO:: ${Constantes.baseUrl}/api/auth/login`)
      if (response && response.access_token) {
        guardarCookie('token', response.access_token)
        router.replace('/admin/home')
      } else {
        // Manejar el caso en que la respuesta no incluye un token
        console.error('La respuesta del servidor no incluye un token.')
      }

      console.log(response)
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Grid container height={'90vh'} justifyContent="center" alignItems="center">
      <Grid item>
        <Card
          sx={{
            borderRadius: 4,
            p: 3,
            px: 4,
            maxWidth: 300,
          }}
        >
          <form onSubmit={handleSubmit(iniciarSesion)}>
            <Box
              display={'grid'}
              justifyContent={'center'}
              alignItems={'center'}
              sx={{ borderRadius: 12 }}
            >
              <Typography align={'center'} sx={{ fontWeight: '600' }}>
                Inicio de Sesión
              </Typography>
              <Box sx={{ mt: 2, mb: 2 }}>
                <Typography
                  fontSize={14}
                  variant={'body1'}
                  color={'text.secondary'}
                >
                  Ingresa tus credenciales para iniciar sesión
                </Typography>
              </Box>
              <FormInputText
                id={'usuario'}
                control={control}
                name="usuario"
                label="Usuario"
                size={'medium'}
                labelVariant={'subtitle1'}
                disabled={loading}
                rules={{ required: 'Este campo es requerido' }}
              />
              <Box sx={{ mt: 1, mb: 1 }}></Box>
              <FormInputText
                id={'contrasena'}
                control={control}
                name="contrasena"
                label="Contraseña"
                size={'medium'}
                labelVariant={'subtitle1'}
                type={'password'}
                disabled={loading}
                rules={{
                  required: 'Este campo es requerido',
                  minLength: {
                    value: 3,
                    message: 'Mínimo 3 caracteres',
                  },
                }}
              />
              <Box sx={{ mt: 0.5, mb: 0.5 }}>
                <ProgresoLineal mostrar={loading} />
              </Box>
              <Box display="flex" flex="1" justifyContent="start">
                <Button
                  onClick={async () => {}}
                  size={'small'}
                  variant={'text'}
                  disabled={loading}
                  color={'primary'}
                >
                  <Typography fontSize={'small'} sx={{ fontWeight: '600' }}>
                    ¿Olvidaste tu contraseña?
                  </Typography>
                </Button>
              </Box>
              <Box sx={{ height: 15 }}></Box>
              <Button
                type="submit"
                variant="contained"
                data-testid="acceder"
                fullWidth
                disabled={loading}
              >
                <Typography sx={{ fontWeight: '600' }}>
                  Iniciar sesión
                </Typography>
              </Button>
            </Box>
          </form>
        </Card>
      </Grid>
    </Grid>
  )
}

export default LoginContainer
