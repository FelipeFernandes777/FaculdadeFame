"use client"

import { useState } from "react"
import { User, Phone, Mail } from "lucide-react"
import Image from "next/image"

export default function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [formData, setFormData] = useState({
        nome: "",
        telefone: "",
        email: "",
        graduado: "sim",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value })
    }

    const handleSubmitForm = async (e?: React.FormEvent) => {
        if (e) e.preventDefault()
        setIsSubmitting(true)

        const INTEGRATELY_WEBHOOK_URL = 'https://webhooks.integrately.com/a/webhooks/1e8386991e5e4a6c9e0ea500919dce19'

        try {
            const apiData = {
                fullName: formData.nome,
                email: formData.email,
                phone: formData.telefone,
                graduado: formData.graduado || "",
            }

            const response = await fetch(INTEGRATELY_WEBHOOK_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(apiData),
            })

            if (!response.ok) throw new Error('Falha ao enviar os dados para o Integrately')

            setFormData({
                nome: "",
                telefone: "",
                email: "",
                graduado: "sim",
            })

            alert("Solicitação enviada com sucesso! Entraremos em contato em breve.")
        } catch (error) {
            console.error("Erro ao enviar a solicitação:", error)
            const errorMessage = error instanceof Error ? error.message : "Ocorreu um erro. Tente novamente mais tarde."
            alert("Erro ao enviar a solicitação: " + errorMessage)
        } finally {
            setIsSubmitting(false)
        }
    }

    return (
        <section className="py-20 bg-gray-50" id="contato">
            <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
                {/* Imagem */}
                <div className="flex justify-center relative w-full h-[500px] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                        src="/imgForm.jpg"
                        alt="Entre em Contato"
                        className="object-cover"
                        fill
                    />
                </div>

                {/* Formulário */}
                <form
                    onSubmit={handleSubmitForm}
                    className="bg-white shadow-2xl rounded-3xl p-12 w-full max-w-2xl mx-auto border border-gray-200"
                >
                    <h2 className="text-4xl font-extrabold text-gray-800 text-center mb-4">
                        Entre em Contato
                    </h2>
                    <p className="text-center text-gray-500 mb-10 text-base">
                        Preencha os dados abaixo e retornaremos em breve.
                    </p>

                    {/* Nome */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">Nome</label>
                        <div className="relative">
                            <User className="absolute left-3 top-3 text-gray-400" size={22} />
                            <input
                                type="text"
                                name="nome"
                                placeholder="Nome"
                                value={formData.nome}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                    </div>

                    {/* Telefone */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">Telefone</label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-3 text-gray-400" size={22} />
                            <input
                                type="tel"
                                name="telefone"
                                placeholder="(XX) XXXXX-XXXX"
                                value={formData.telefone}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                    </div>

                    {/* Email */}
                    <div className="mb-6">
                        <label className="block text-gray-700 mb-2 font-medium">E-mail</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-3 text-gray-400" size={22} />
                            <input
                                type="email"
                                name="email"
                                placeholder="email@dominio.com"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full border rounded-xl px-12 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                            />
                        </div>
                    </div>

                    {/* Graduado */}
                    <div className="mb-10">
                        <label className="block text-gray-700 mb-2 font-medium">Você é graduado?</label>
                        <select
                            name="graduado"
                            value={formData.graduado}
                            onChange={handleChange}
                            className="w-full border rounded-xl px-4 py-3 text-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
                        >
                            <option value="não">Não</option>
                            <option value="sim">Sim</option>
                        </select>
                    </div>

                    {/* Botão */}
                    <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-gradient-to-r from-gray-600 to-gray-700 text-white py-4 rounded-xl text-lg font-semibold hover:from-gray-700 hover:to-gray-800 transition cursor-pointer disabled:opacity-50"
                    >
                        {isSubmitting ? "Enviando..." : "Enviar"}
                    </button>
                </form>
            </div>
        </section>
    )
}
