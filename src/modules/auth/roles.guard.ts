import {
  CanActivate,
  ExecutionContext,
  Injectable,
  ForbiddenException,
} from '@nestjs/common';
import { Reflector } from '@nestjs/core';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean {
    const requiredRoles = this.reflector.getAllAndOverride<string[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    const { user } = context.switchToHttp().getRequest();
    console.log('Usuario recibido en RolesGuard:', user);
    console.log('Roles requeridos:', requiredRoles);
    if (!user || !requiredRoles.includes(user.rol)) {
      throw new ForbiddenException('Acceso denegado');
    }
    return true;
  }
}
