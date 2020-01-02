#!/bin/bash
docker-compose up -d && docker-compose exec builder npm run test