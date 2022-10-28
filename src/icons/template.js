function template({ template }, _opts, { componentName, jsx }) {
    const typeScriptTpl = template.smart({ plugins: ['typescript'] });

    componentName.name = componentName.name.slice(3) + 'Icon';

    return typeScriptTpl.ast`
  import { chakra } from '@chakra-ui/react';
  import { forwardRef, SVGProps } from 'react';

  interface CustomIconProps extends SVGProps<SVGSVGElement> {
    size?: number
  }

  const SVGIcon = forwardRef<SVGSVGElement, CustomIconProps>(({ size, ...props }, svgRef) => {
    if (size) {
      props.width = size;
      props.height = size;
    }

    return ${jsx};
  })

  const ${componentName} = chakra(SVGIcon);

  export default ${componentName};
`;
}
module.exports = template;