FROM node:22-alpine
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm config set strict-ssl false && npm ci --omit=dev
COPY contact.mjs ./
# Messages are kept in a named volume; the folder must exist and belong to "node" first.
RUN mkdir -p /data && chown node:node /data
USER node
ENV NODE_ENV=production DATA_DIR=/data PORT=3000
EXPOSE 3000
CMD ["node", "contact.mjs"]
