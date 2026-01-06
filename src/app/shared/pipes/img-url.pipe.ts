import { Pipe, PipeTransform } from '@angular/core';
import { environment } from '../../../environments/environment';

@Pipe({
  name: 'imgUrl'
})
export class ImgUrlPipe implements PipeTransform {

  transform(value: string): string {
    // Se a URL já for http (externa), não faz nada
    if (value.startsWith('http')) {
      return value;
    }

    // Garante que não duplique barras
    const basePath = environment.remoteBaseUrl.endsWith('/')
      ? environment.remoteBaseUrl
      : `${environment.remoteBaseUrl}/`;

    const path = value.startsWith('/') ? value.substring(1) : value;

    return `${basePath}${path}`;
  }

}
