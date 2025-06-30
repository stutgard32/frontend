

export function useSendMailer() {
  const name = ref('')
  const phone = ref('')
  const email = ref('')
  const isSuccess = ref(false)
  const errors = ref({
    name: '',
    phone: '',
    email: '',
  })

  const errorMessage = ref('')

  const validateForm = () => {
    errors.value = {
      name: '',
      phone: '',
      email: '',
    }
    if (name.value === '') {
      errors.value.name = '* Имя не может быть пустым'
    }
    if (phone.value === '') {
      errors.value.phone = '* Телефон не может быть пустым'
    }
    if (email.value === '') {
      errors.value.email = '* Email не может быть пустым'
    } else if (!email.value.includes('@') || !email.value.includes('.')) {
      errors.value.email = '* Не корректный email'
    }
    return !errors.value.name && !errors.value.phone && !errors.value.email
  }

  const handleSubmit = async (data: {
    name: string,
    phone: string,
    email: string,
  }) => {  
    try { 
      if (!validateForm()) {
        return
      }
      errorMessage.value = ''
      const mail = useMail()
      await mail.send({
        to: 'support@primedev.pro',
        subject: 'Новая заявка с сайта "st-av.ru"',
        html: `
          <p><strong>Имя:</strong> ${data.name}</p>
          <p><strong>Телефон:</strong> ${data.phone}</p>
          <p><strong>Email:</strong> ${data.email}</p>
        `,
      })
      isSuccess.value = true
      name.value = ''
      phone.value = ''
      email.value = ''
      setTimeout(() => {
        isSuccess.value = false
      }, 4000)
    } catch (error) {
      errorMessage.value = 'Ошибка отправки'
    } finally {
    }
  }
  
  return {
    name,
    phone,
    email,
    errors,
    handleSubmit,
    validateForm,
    isSuccess,
  }
}