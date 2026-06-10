import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { toast } from 'sonner';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  empresa: z.string().min(1, 'La empresa es requerida'),
  cargo: z.string().optional(),
  correo: z.string().email('Correo electrónico inválido'),
  telefono: z.string().min(1, 'El teléfono es requerido'),
  servicio: z.string().min(1, 'Selecciona un servicio'),
  mensaje: z.string().min(10, 'El mensaje debe tener al menos 10 caracteres'),
});

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    setValue,
    watch,
  } = useForm({
    resolver: zodResolver(formSchema),
  });

  const servicioValue = watch('servicio');

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const timestamp = new Date().toISOString();
      const storageKey = `dyxersoft_contact_${Date.now()}`;
      localStorage.setItem(storageKey, JSON.stringify({ ...data, timestamp }));
      
      toast.success('Gracias por tu interés. Nos pondremos en contacto pronto.');
      reset();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } catch (error) {
      toast.error('Hubo un error al enviar el formulario. Por favor intenta nuevamente.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="nombre" className="text-foreground">Nombre *</Label>
          <Input
            id="nombre"
            {...register('nombre')}
            placeholder="Tu nombre completo"
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
          {errors.nombre && (
            <p className="text-sm text-destructive">{errors.nombre.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="empresa" className="text-foreground">Empresa *</Label>
          <Input
            id="empresa"
            {...register('empresa')}
            placeholder="Nombre de tu empresa"
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
          {errors.empresa && (
            <p className="text-sm text-destructive">{errors.empresa.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cargo" className="text-foreground">Cargo</Label>
          <Input
            id="cargo"
            {...register('cargo')}
            placeholder="Tu cargo en la empresa"
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="correo" className="text-foreground">Correo electrónico *</Label>
          <Input
            id="correo"
            type="email"
            {...register('correo')}
            placeholder="tu@email.com"
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
          {errors.correo && (
            <p className="text-sm text-destructive">{errors.correo.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="telefono" className="text-foreground">Teléfono / WhatsApp *</Label>
          <Input
            id="telefono"
            {...register('telefono')}
            placeholder="+591 6206 9477"
            className="bg-background text-foreground placeholder:text-muted-foreground"
          />
          {errors.telefono && (
            <p className="text-sm text-destructive">{errors.telefono.message}</p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="servicio" className="text-foreground">Servicio de interés *</Label>
          <Select onValueChange={(value) => setValue('servicio', value)} value={servicioValue}>
            <SelectTrigger className="bg-background text-foreground">
              <SelectValue placeholder="Selecciona un servicio" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="demo-pigim">Demo de PIGIM</SelectItem>
              <SelectItem value="desarrollo-saas">Desarrollo SaaS</SelectItem>
              <SelectItem value="software-personalizado">Software personalizado</SelectItem>
              <SelectItem value="ingenieria-datos-bi">Ingeniería de datos/BI</SelectItem>
              <SelectItem value="automatizacion">Automatización</SelectItem>
              <SelectItem value="consultoria">Consultoría tecnológica</SelectItem>
            </SelectContent>
          </Select>
          {errors.servicio && (
            <p className="text-sm text-destructive">{errors.servicio.message}</p>
          )}
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="mensaje" className="text-foreground">Mensaje *</Label>
        <Textarea
          id="mensaje"
          {...register('mensaje')}
          placeholder="Cuéntanos sobre tu proyecto o necesidad..."
          rows={5}
          className="bg-background text-foreground placeholder:text-muted-foreground resize-none"
        />
        {errors.mensaje && (
          <p className="text-sm text-destructive">{errors.mensaje.message}</p>
        )}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90 active:scale-[0.98] transition-all duration-200"
      >
        {isSubmitting ? (
          <>
            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            Enviando...
          </>
        ) : (
          'Enviar mensaje'
        )}
      </Button>
    </form>
  );
}

export default ContactForm;