import {
  Controller,
  Post,
  UseInterceptors,
  UploadedFiles,
  ParseFilePipe,
  MaxFileSizeValidator,
  BadRequestException,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { extname } from 'path';

// Allowed mime types regex
const imageMimeTypes = /^image\/(jpeg|png|webp|gif)$/;

@Controller('upload')
export class UploadController {
  @Post()
  @UseInterceptors(
    FilesInterceptor('files', 10, {
      storage: diskStorage({
        destination: process.env.UPLOAD_DIR || './uploads',
        filename: (req, file, cb) => {
          const uniqueSuffix = uuidv4();
          const ext = extname(file.originalname);
          cb(null, `${uniqueSuffix}${ext}`);
        },
      }),
      fileFilter: (req, file, cb) => {
        if (!imageMimeTypes.test(file.mimetype)) {
          return cb(new BadRequestException('Only images are allowed (jpeg, png, webp, gif)'), false);
        }
        cb(null, true);
      },
    }),
  )
  uploadFiles(
    @UploadedFiles(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({
            maxSize: parseInt(process.env.MAX_FILE_SIZE || '10485760', 10), // 10MB by default
          }),
        ],
      }),
    )
    files: Array<Express.Multer.File>,
  ) {
    if (!files || files.length === 0) {
      throw new BadRequestException('No files provided');
    }

    const fileUrls = files.map((file) => `/uploads/${file.filename}`);
    
    return {
      message: 'Files uploaded successfully',
      urls: fileUrls,
    };
  }
}
