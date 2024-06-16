"use client"
import React, { useState } from 'react';
import axios, { AxiosError, AxiosResponse } from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

type FormInputs = {
  name: string;
  email: string;
  message: string;
};

type StatusState = {
  type: 'idle' | 'loading' | 'success' | 'error';
  message: string;
};

const ContactForm: React.FC = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormInputs>();
    const [status, setStatus] = useState<StatusState>({ type: 'idle', message: '' });

    const onSubmit: SubmitHandler<FormInputs> = async (data) => {
        try {
            setStatus({ type: 'loading', message: 'Enviando mensaje...' });
            const response: AxiosResponse = await axios.post('/api/contact', data);
            console.log('Mensaje enviado:', response.data);
            setStatus({ type: 'success', message: '¡Mensaje enviado con éxito!' });
            reset();
        } catch (error) {
            console.error('Error al enviar mensaje:', error);
            const axiosError = error as AxiosError;
            setStatus({
  type: 'error',
  message: (axiosError.response?.data as any)?.error || 'Error al enviar el mensaje. Por favor, intenta de nuevo.'
});
        }
    };

    return (
        <div className="max-w-md mx-auto mt-16 space-y-8">
            <h2 className="text-3xl font-bold text-gray-800 text-center">Contáctanos</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="bg-white shadow-xl rounded-lg p-8 space-y-6">
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                        Nombre
                    </label>
                    <input
                        {...register('name', { required: 'Este campo es requerido' })}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring focus:ring-[#4f46e5] focus:ring-opacity-50"
                        id="name"
                        type="text"
                        placeholder="Tu nombre"
                    />
                    {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                        Correo Electrónico
                    </label>
                    <input
                        {...register('email', {
                            required: 'Este campo es requerido',
                            pattern: { value: /^\S+@\S+$/i, message: 'Correo electrónico inválido' }
                        })}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring focus:ring-[#4f46e5] focus:ring-opacity-50"
                        id="email"
                        type="email"
                        placeholder="tu@email.com"
                    />
                    {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
                </div>
                <div>
                    <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                        Mensaje
                    </label>
                    <textarea
                        {...register('message', { required: 'Este campo es requerido' })}
                        className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:border-[#4f46e5] focus:ring focus:ring-[#4f46e5] focus:ring-opacity-50 h-32 resize-none"
                        id="message"
                        placeholder="¿En qué podemos ayudarte?"
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message.message}</p>}
                </div>
                <div>
                    <button
                        className="w-full bg-[#4f46e5] hover:bg-[#4338ca] text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105 disabled:bg-gray-400 disabled:transform-none"
                        type="submit"
                        disabled={status.type === 'loading'}
                    >
                        {status.type === 'loading' ? 'Enviando...' : 'Enviar Mensaje'}
                    </button>
                </div>
            </form>
            {status.message && (
                <div className={`p-4 rounded-lg text-center text-white ${
                    status.type === 'success' ? 'bg-green-500' : status.type === 'error' ? 'bg-red-500' : 'bg-[#4f46e5]'
                }`}>
                    {status.message}
                </div>
            )}
        </div>
    );
};

export default ContactForm;