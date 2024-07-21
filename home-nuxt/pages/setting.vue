<script setup lang="ts">
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Checkbox } from '@/components/ui/checkbox'

import { Input } from '@/components/ui/input'
</script>

<template>
  <div>
    <div class="mx-auto grid w-full max-w-6xl gap-2">
      <h1 class="text-3xl font-semibold">
        Settings
      </h1>
    </div>
    <div class="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
      <nav class="grid gap-4 text-sm text-muted-foreground">
        <a
          href="#"
          class="font-semibold text-primary"
        >
          General
        </a>
        <a href="#">
          Security
        </a>
        <a href="#">
          Integrations
        </a>
        <a href="#">
          Support
        </a>
        <a href="#">
          Organizations
        </a>
        <a href="#">
          Advanced
        </a>
      </nav>
      <div class="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Store Name</CardTitle>
            <CardDescription>
              Used to identify your store in the marketplace.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form>
              <Input placeholder="Store Name" />
            </form>
          </CardContent>
          <CardFooter class="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Plugins Directory</CardTitle>
            <CardDescription>
              The directory within your project, in which your plugins are
              located.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form class="flex flex-col gap-4">
              <Input
                placeholder="Project Name"
                default-value="/content/plugins"
              />
              <div class="flex items-center space-x-2">
                <Checkbox
                  id="include"
                  default-checked
                />
                <label
                  for="include"
                  class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Allow administrators to change the directory.
                </label>
              </div>
            </form>
          </CardContent>
          <CardFooter class="border-t px-6 py-4">
            <Button>Save</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  </div>
</template>
