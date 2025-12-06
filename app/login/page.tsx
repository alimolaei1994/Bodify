'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { useAuth } from '@/contexts/AuthContext'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Label } from '@/components/ui/label'

export default function LoginPage() {
	const [isLogin, setIsLogin] = useState(true)
	const [formData, setFormData] = useState<{
		username: string
		password: string
		phoneNumber: string
		gender: 'male' | 'female' | 'other'
		gymId: string
	}>({
		username: '',
		password: '',
		phoneNumber: '',
		gender: 'male',
		gymId: ''
	})
	const [gyms, setGyms] = useState([
		{ id: 'gym-1', name: 'Sam Fit' },
		{ id: 'gym-2', name: 'U Gym' },
		{ id: 'gym-3', name: 'Oxygen' }
	])
	const [error, setError] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const router = useRouter()
	const { login, signup } = useAuth()

	const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
		const { name, value } = e.target
		setFormData((prev) => ({
			...prev,
			[name]: name === 'gender' ? (value as 'male' | 'female' | 'other') : value
		}))
	}

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault()
		setError('')
		setIsLoading(true)

		try {
			if (isLogin) {
				await login(formData.username, formData.password)
				router.push('/dashboard')
			} else {
				await signup(formData)
				// Gym will be notified and needs to approve
				router.push('/waiting-approval')
			}
		} catch (err) {
			setError('نام کاربری یا رمز عبور اشتباه است')
			console.error('Authentication error:', err)
		} finally {
			setIsLoading(false)
		}
	}

	return (
		<div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-rose-100 to-blue-100 p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="space-y-1 text-center">
					<CardTitle className="text-2xl font-bold">{isLogin ? 'ورود به RiseStyle' : 'ثبت نام در RiseStyle'}</CardTitle>
					<CardDescription>{isLogin ? 'لطفا اطلاعات خود را وارد کنید' : 'برای عضویت فرم زیر را پر کنید'}</CardDescription>
				</CardHeader>

				<form onSubmit={handleSubmit}>
					<CardContent className="space-y-4">
						{error && (
							<div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
								<span className="block sm:inline">{error}</span>
							</div>
						)}

						<div className="space-y-2">
							<Label htmlFor="username">نام کاربری</Label>
							<Input
								id="username"
								name="username"
								type="text"
								required
								value={formData.username}
								onChange={handleChange}
								placeholder="نام کاربری خود را وارد کنید"
								className="text-left"
							/>
						</div>

						<div className="space-y-2">
							<Label htmlFor="password">رمز عبور</Label>
							<Input
								id="password"
								name="password"
								type="password"
								required
								value={formData.password}
								onChange={handleChange}
								placeholder="رمز عبور خود را وارد کنید"
								className="text-left"
							/>
						</div>

						{!isLogin && (
							<>
								<div className="space-y-2">
									<Label htmlFor="phoneNumber">شماره تلفن همراه</Label>
									<Input
										id="phoneNumber"
										name="phoneNumber"
										type="tel"
										required
										value={formData.phoneNumber}
										onChange={handleChange}
										placeholder="09xxxxxxxxx"
										className="text-left"
									/>
								</div>

								<div className="space-y-2">
									<Label htmlFor="gender">جنسیت</Label>
									<select
										id="gender"
										name="gender"
										value={formData.gender}
										onChange={handleChange}
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
										<option value="male">مرد</option>
										<option value="female">زن</option>
										<option value="other">سایر</option>
									</select>
								</div>

								<div className="space-y-2">
									<Label htmlFor="gymId">باشگاه ورزشی</Label>
									<select
										id="gymId"
										name="gymId"
										required
										value={formData.gymId}
										onChange={handleChange}
										className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
										<option value="">باشگاه خود را انتخاب کنید</option>
										{gyms.map((gym) => (
											<option key={gym.id} value={gym.id}>
												{gym.name}
											</option>
										))}
									</select>
								</div>
							</>
						)}
					</CardContent>

					<CardFooter className="flex flex-col space-y-4">
						<Button type="submit" className="w-full" disabled={isLoading}>
							{isLoading ? 'در حال پردازش...' : isLogin ? 'ورود' : 'ثبت نام'}
						</Button>

						<div className="text-sm text-center">
							{isLogin ? (
								<p>
									حساب کاربری ندارید؟{' '}
									<button type="button" onClick={() => setIsLogin(false)} className="text-blue-600 hover:underline">
										ثبت نام کنید
									</button>
								</p>
							) : (
								<p>
									قبلا ثبت نام کرده‌اید؟{' '}
									<button type="button" onClick={() => setIsLogin(true)} className="text-blue-600 hover:underline">
										وارد شوید
									</button>
								</p>
							)}
						</div>
					</CardFooter>
				</form>
			</Card>
		</div>
	)
}
