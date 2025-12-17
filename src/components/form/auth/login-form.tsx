import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import type { z } from 'zod';
import { Button } from '@/components/ui/button';
import {
    Form,
} from '@/components/ui/form';
import { useCaptcha } from '@/context/captcha';
import { loginSchema } from '@/schema/auth/login.schema';
import FloatingInput from '../floating-input';

export interface IAdminFormProps {
    isLoading: boolean;
    onSuccess: (data: z.infer<typeof loginSchema>) => void;
}

export default function LoginAdminForm({
    onSuccess,
    isLoading,
}: IAdminFormProps) {
    const captcha = useCaptcha()

    const form = useForm<z.infer<typeof loginSchema>>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            account: '',
            password: '',
        },
    });

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSuccess)} className="space-y-5">
                <FloatingInput
                    name='account'
                    type='text'
                    control={form.control}
                    label='Account'
                />
                <FloatingInput
                    name='password'
                    type='password'
                    control={form.control}
                    label='Password'
                />
                <div className='flex justify-center'>
                    {captcha.render()}
                </div>
                <Button className="w-full btn-primary cursor-pointer" type="submit" disabled={isLoading || !captcha.is_completd}>
                    เข้าสู่ระบบ
                </Button>
            </form>
        </Form>
    );
}
