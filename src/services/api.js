// services/api.js
import axiosInstance from '../utils/axiosInstance'

export const registerUser = async (data) => {
  try {
    const response = await axiosInstance.post('/auth/register', data)
    return response.data
  } catch (error) {
    console.error('Register API Error:', error.response?.data || error.message)
    throw error
  }
}

export const getExpertise = async () => {
  try {
    const response = await axiosInstance.get('/auth/expertise')
    return response.data
  } catch (error) {
    console.error('Expertise API Error:', error.response?.data || error.message)
    throw error
  }
}

export const getExperience = async () => {
  try {
    const response = await axiosInstance.get('/auth/experience')
    return response.data
  } catch (error) {
    console.error(
      'Experience API Error:',
      error.response?.data || error.message
    )
    throw error
  }
}

export async function uploadMultipleFiles(fileList, filesInfo) {
  const formData = new FormData()

  // Add each file
  fileList.forEach((file) => {
    formData.append('files', file)
  })

  // Add metadata
  formData.append('filesInfo', JSON.stringify(filesInfo))

  // Debugging
  for (const [key, value] of formData.entries()) {
    console.log('FormData key:', key, 'value:', value)
  }

  // Get token from localStorage
  const token = localStorage.getItem('accessToken')

  // Prepare headers, conditionally adding Authorization
  const headers = {
    'Content-Type': 'multipart/form-data',
  }
  if (token) {
    headers['Authorization'] = `Bearer ${token}`
  }

  // Send the request
  const response = await axiosInstance.post('/upload/multiple', formData, {
    headers,
  })

  return response.data
}


export const getMyFiles = async () => {
  try {
    const response = await axiosInstance.get('/upload/my-files', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('getMyFiles API Error:', error.response?.data || error.message);
    throw error;
  }
};

export const LoginUser = async ({email, password}) => {
  try {
    const response = await axiosInstance.post('/auth/login', {
      email,
      password,
    })
    return response.data
  } catch (error) {
    console.error('Login API Error:', error.response?.data || error.message)
    throw error
  }
}

export const getProfile = async () => {
  try {
    const response = await axiosInstance.get('/users/profile', {
      headers: {
        'Authorization': `Bearer ${localStorage.getItem('accessToken')}`
      }
    });
    return response.data;
  } catch (error) {
    console.error('getProfile API Error:', error.response?.data || error.message);
    throw error;
  }
};

export const getSubscriptionPlans = async () => {
  try {
    // ✅ read token at the time of the request
    const token = localStorage.getItem('accessToken');

    if (!token) {
      throw new Error('No access token found. Please log in.');
    }

    const response = await axiosInstance.get('/admin/subscription-plans', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return response.data; // { success: true, data: [...] }
  } catch (error) {
    console.error(
      'getSubscriptionPlans API Error:',
      error.response?.data || error.message
    );
    throw error;
  }
};

export const getForgetPassword = async (email) => {
  try {
    const response = await axiosInstance.post('/auth/forgot-password', {
      email,
    })
    return response.data
  } catch (error) {
    console.error('getForgetPassword API Error:', error.response?.data || error.message)  
    throw error
  }
}
export const ResetPassword = async ({token,newPassword,confirmPassword}) => {
  try {
    const response = await axiosInstance.post(`/auth/reset-password/${token}`, {
      newPassword,
      confirmPassword,
    })
    return response.data
  } catch (error) {
    console.error('changePassword API Error:', error.response?.data || error.message)
    throw error
  }
} 

export const Subscribe = async (planId,billingCycle,paymentMethodId) => {
  try {
    const response = await axiosInstance.post('/user/subscription/subscribe', {
      planId,
      billingCycle,
      paymentMethodId
    })
    return response.data
  } catch (error) {
    console.error('Subscribe API Error:', error.response?.data || error.message)
    throw error
  }
}

export const TrialAssign = async () => {
  try {
    const response = await axiosInstance.post(
      "/users/trial",
      {}, // empty body
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      }
    );

    return response.data;
  } catch (error) {
    console.error(
      "TrialAssign API Error:",
      error.response?.data || error.message
    );
    throw error;
  }
};
