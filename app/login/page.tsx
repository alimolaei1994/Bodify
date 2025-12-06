'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Chrome } from 'lucide-react'

export default function LoginPage() {
	const router = useRouter()
	const [isLoading, setIsLoading] = useState(false)

	const handleGoogleLogin = async () => {
		setIsLoading(true)
		// TODO: Implement Google SSO
		// For now, just redirect to dashboard
		setTimeout(() => {
			router.push('/dashboard')
		}, 1000)
	}

	return (
		<div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
			<Card className="w-full max-w-md p-8 bg-slate-800 border-slate-700">
				<div className="text-center mb-8">
					<Link href="/" className="inline-flex items-center gap-2 mb-6">
						<Image src="/icon.png" alt="RiseStyle" width={48} height={48} className="object-contain" />
						<span className="text-3xl font-bold text-white">RiseStyle</span>
					</Link>
					<h1 className="text-2xl font-bold text-white mb-2">خوش آمدید</h1>
					<p className="text-slate-400">برای ادامه وارد حساب کاربری خود شوید</p>
				</div>

				<div className="space-y-4">
					<Button
						onClick={handleGoogleLogin}
						disabled={isLoading}
						className="w-full bg-white text-slate-900 hover:bg-slate-100 h-12 text-base"
					>
						{isLoading ? (
							<>
								<div className="w-5 h-5 border-2 border-slate-900 border-t-transparent rounded-full animate-spin mr-2" />
								در حال ورود...
							</>
						) : (
							<>
								<Chrome className="w-5 h-5 mr-2" />
								ورود با گوگل
							</>
						)}
					</Button>

					<div className="relative my-6">
						<div className="absolute inset-0 flex items-center">
							<div className="w-full border-t border-slate-700"></div>
						</div>
						<div className="relative flex justify-center text-sm">
							<span className="px-4 bg-slate-800 text-slate-400">یا</span>
						</div>
					</div>

					<div className="text-center text-sm text-slate-400">
						با ورود، شما{' '}
						<Link href="#" className="text-emerald-400 hover:text-emerald-300 underline">
							قوانین استفاده
						</Link>{' '}
						و{' '}
						<Link href="#" className="text-emerald-400 hover:text-emerald-300 underline">
							حریم خصوصی
						</Link>{' '}
						ما را می‌پذیرید
					</div>
				</div>

				<div className="mt-8 text-center">
					<Link href="/" className="text-sm text-slate-400 hover:text-white transition-colors">
						بازگشت به صفحه اصلی
					</Link>
				</div>
			</Card>
		</div>
	)
}

